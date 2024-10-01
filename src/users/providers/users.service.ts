import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { ConfigService, ConfigType } from '@nestjs/config';
import profileConfig from '../config/profile.config';
import { GetUserParamsDto } from '../dto/get-user-params.dto';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { CreateManyUsersDto } from '../dto/create-many-users.dto';

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

    @Inject()
    private readonly dataSource: DataSource,

    private readonly usersCreateManyProvider: UsersCreateManyProvider,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    try {
      const userExist = await this.usersRepository.findOne({
        where: { email: createUserDto.email },
      });
      if (userExist) {
        throw new UnauthorizedException('User already exist');
      }

      const newUser = this.usersRepository.create(createUserDto);

      await this.usersRepository.save(newUser);

      return newUser;
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process request at the moment',
        {
          description: 'Error connection to database',
        },
      );
    }
  }
  /**
   *  The method to get all users from database
   * @returns {Array} - Array of users
   */
  async findAll(getUserParamDto: GetUserParamsDto, limt: number, page: number) {
    try {
      const key = this.profileConfiguration.apiKey;
      console.log('key', key);

      const environment = this.configService.get<string>('S3_BUCKET');
      console.log('environment', environment);

      return await this.usersRepository.find();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.MOVED_PERMANENTLY,
          error: 'This is a custom message',
          fileName: 'users.service.ts',
          lineNumber: 80,
        },
        HttpStatus.MOVED_PERMANENTLY,
        {
          cause: new Error(),
          description: 'Error fetching users',
        },
      );
    }
  }

  /**
   *  The method to get user by id
   * @param {number} id - User id
   * @returns {Object} - User
   */
  async findById(id: number) {
    let user = undefined;
    try {
      user = await this.usersRepository.findOne({
        where: { id },
      });

      if (!user) {
        throw new BadRequestException('User not found');
      }

      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async createMany(createManyUsersDto: CreateManyUsersDto) {
    return await this.usersCreateManyProvider.createMany(createManyUsersDto);
  }
}
