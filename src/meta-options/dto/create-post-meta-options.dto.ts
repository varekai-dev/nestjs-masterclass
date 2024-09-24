import { ApiProperty } from '@nestjs/swagger';
import { IsJSON, IsNotEmpty } from 'class-validator';

export class CreatePostMetaOptionsDto {
  @ApiProperty({
    description: 'JSON data',
    example: '{"sidebarEnabled":true, "footerActive":true}',
  })
  @IsJSON()
  @IsNotEmpty()
  metaValue: string;
}
