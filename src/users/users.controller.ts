import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PatchUserDto } from './dto/path-user.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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
  @Get()
  async getAllUsers() {
    return await this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Fetches one single user' })
  @ApiResponse({
    status: 200,
  })
  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.findById(id);
  }
  @ApiOperation({ summary: 'Create new user' })
  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return await this.usersService.createUser(body);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() body: PatchUserDto) {
    console.log(id);
    console.log(body);
    return 'user updated';
  }
}
