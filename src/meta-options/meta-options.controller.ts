import { Body, Controller, Post } from '@nestjs/common';
import { MetaOptionsService } from './meta-options.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostMetaOptionsDto } from './dto/create-post-meta-options.dto';

@ApiTags('Meta Options')
@Controller('meta-options')
export class MetaOptionsController {
  constructor(private readonly metaOptionsService: MetaOptionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tag' })
  @ApiResponse({
    status: 201,
    description: 'The tag has been successfully created',
  })
  async create(@Body() createPostMetaOptionsDto: CreatePostMetaOptionsDto) {
    return await this.metaOptionsService.create(createPostMetaOptionsDto);
  }
}
