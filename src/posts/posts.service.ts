import {
  BadRequestException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { MetaOption } from 'src/meta-options/entities/meta-option.entity';
import { UsersService } from 'src/users/users.service';
import { TagsService } from 'src/tags/tags.service';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>,

    private readonly usersService: UsersService,
    private readonly tagsService: TagsService,
  ) {}

  public async createPost(createPostDto: CreatePostDto) {
    const author = await this.usersService.findById(createPostDto.authorId);
    const tags = await this.tagsService.findMultipleTags(createPostDto.tags);

    const post = this.postRepository.create({
      ...createPostDto,
      author,
      tags,
    });
    return await this.postRepository.save(post);
  }

  public async findAll(): Promise<Post[]> {
    return await this.postRepository.find({
      relations: {
        metaOptions: true,
        author: true,
        tags: true,
      },
    });
  }

  public async delete(id: number) {
    await this.postRepository.delete(id);
    return { deleted: true, id };
  }

  public async update(updatePostDto: UpdatePostDto) {
    let post;
    try {
      post = await this.postRepository.findOneBy({
        id: updatePostDto.id,
      });
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process request at the moment',
      );
    }

    if (!post) {
      throw new BadRequestException('Post not found');
    }

    post.title = updatePostDto.title ?? post.title;
    post.content = updatePostDto.content ?? post.content;
    post.status = updatePostDto.status ?? post.status;
    post.postType = updatePostDto.postType ?? post.postType;
    post.slug = updatePostDto.slug ?? post.slug;
    post.featuredImageUrl =
      updatePostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.publishOn = updatePostDto.publishOn ?? post.publishOn;

    if (updatePostDto.tags) {
      try {
        const tags = await this.tagsService.findMultipleTags(
          updatePostDto.tags,
        );

        if (!tags || tags.length !== updatePostDto.tags.length) {
          throw new BadRequestException('Some tags were not found');
        }

        post.tags = tags;
      } catch (error) {
        throw new RequestTimeoutException(
          'Unable to process request at the moment',
        );
      }
    }

    try {
      await this.postRepository.save(post);
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process request at the moment',
      );
    }
    return post;
  }
}
