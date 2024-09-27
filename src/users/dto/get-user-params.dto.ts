import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class GetUserParamsDto {
  @ApiPropertyOptional({
    description: 'User id',
    example: 1234,
  })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  id?: number;
}
