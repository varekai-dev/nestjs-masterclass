import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

/**
 *  Class to connect to Users table and perform business logic
 */
@Injectable()
export class UsersService {
  constructor(
    /**
     *  Injecting usersRepository
     */
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const userExist = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (userExist) {
      return 'User already exists';
    }

    const newUser = this.usersRepository.create(createUserDto);

    await this.usersRepository.save(newUser);

    return newUser;
  }
  /**
   *  The method to get all users from database
   * @returns {Array} - Array of users
   */
  async findAll() {
    return await this.usersRepository.find();
  }

  /**
   *  The method to get user by id
   * @param {number} id - User id
   * @returns {Object} - User
   */
  async findById(id: number) {
    return await this.usersRepository.findOne({
      where: { id },
    });
  }
}
