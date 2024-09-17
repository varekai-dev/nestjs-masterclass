import {
  Body,
  Controller,
  Get,
  Ip,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserParamDto } from './dto/get-user-param.dto';
import { PatchUserDto } from './dto/path-user.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UserController {
  @Get(':id?')
  @ApiOperation({ summary: 'Fetches all registered users' })
  @ApiResponse({
    status: 200,
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'Limit the number of users',
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'The position of the page',
  })
  getUsers(@Param() getUserParamDto: GetUserParamDto, @Query() query: any) {
    console.log(getUserParamDto);
    console.log(query);
    return 'work';
  }

  @Post()
  createUser(@Body() body: CreateUserDto, @Ip() ip) {
    console.log(ip);
    console.log(body);
    return 'user created';
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() body: PatchUserDto) {
    console.log(id);
    console.log(body);
    return 'user updated';
  }
}
