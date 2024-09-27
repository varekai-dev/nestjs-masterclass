import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PatchUserDto } from './dto/path-user.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { GetUserParamsDto } from './dto/get-user-params.dto';

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
  async getAllUsers(
    @Param() getUserParamDto: GetUserParamsDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return await this.usersService.findAll(getUserParamDto, limit, page);
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
