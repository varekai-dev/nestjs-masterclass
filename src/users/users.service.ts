import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { ConfigService, ConfigType } from '@nestjs/config';
import profileConfig from './config/profile.config';

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
    /**
     * Injecting configService
     */
    private readonly configService: ConfigService,

    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,
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
    const key = this.profileConfiguration.apiKey;
    console.log('key', key);

    const environment = this.configService.get<string>('S3_BUCKET');
    console.log('environment', environment);

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
