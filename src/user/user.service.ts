import { Injectable } from '@nestjs/common';

/**
 *  Class to connect to Users table and perform business logic
 */
@Injectable()
export class UserService {
  /**
   *  The method to get all users from database
   * @returns {Array} - Array of users
   */
  findAll() {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
      },
    ];
  }

  /**
   *  The method to get user by id
   * @param {number} id - User id
   * @returns {Object} - User
   */
  findById(id: number) {
    return {
      id: id,
      name: 'John Doe',
      email: 'serhijsav@gmail.com',
    };
  }
}
