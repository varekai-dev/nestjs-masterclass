import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { TagsService } from './tags.service';
import { ApiTags } from '@nestjs/swagger';
import { ParseIntArrayPipe } from 'src/common/pipes';

@ApiTags('Tags')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  public create(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @Get()
  public findMultipleTags(
    @Query('tagIds', ParseIntArrayPipe) tagIds: number[],
  ) {
    return this.tagsService.findMultipleTags(tagIds);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.tagsService.delete(id);
  }

  @Delete('soft-delete/:id')
  softDelete(@Param('id', ParseIntPipe) id: number) {
    return this.tagsService.softDelete(id);
  }
}
