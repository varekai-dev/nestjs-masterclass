import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { DataSource, In } from 'typeorm';
import { User } from '../user.entity';
import { CreateManyUsersDto } from '../dto/create-many-users.dto';

@Injectable()
export class UsersCreateManyProvider {
  constructor(
    @Inject()
    private readonly dataSource: DataSource,
  ) {}

  async createMany(createManyUsersDto: CreateManyUsersDto) {
    try {
      const newUsers: User[] = [];
      const queryRunner = this.dataSource.createQueryRunner();

      const emails = createManyUsersDto.users.map((user) => user.email);

      const existedUsers = await queryRunner.manager.find(User, {
        where: { email: In(emails) },
      });

      if (existedUsers.length > 0) {
        throw new ConflictException(
          `User with email(s): ${existedUsers.map((user) => user.email).join(', ')} already exist`,
        );
      }

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        for (const user of createManyUsersDto.users) {
          const newUser = queryRunner.manager.create(User, user);
          const result = await queryRunner.manager.save(newUser);
          newUsers.push(result);
        }

        await queryRunner.commitTransaction();
      } catch (error) {
        await queryRunner.rollbackTransaction();
        throw new ConflictException('Could not complete transaction', {
          description: String(error),
        });
      } finally {
        try {
          await queryRunner.release();
        } catch (error) {
          throw new RequestTimeoutException('Could not create users');
        }
      }
      return newUsers;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
