import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findById(id: number) {
    return {
      id: id,
      name: 'John Doe',
      email: 'serhijsav@gmail.com',
    };
  }
}
