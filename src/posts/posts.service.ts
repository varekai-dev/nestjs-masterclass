import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { MetaOption } from 'src/meta-options/entities/meta-option.entity';
import { UsersService } from 'src/users/users.service';
import { TagsService } from 'src/tags/tags.service';

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
}
