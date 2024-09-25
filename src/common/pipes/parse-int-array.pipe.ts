import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntArrayPipe implements PipeTransform {
  transform(value: any) {
    if (!Array.isArray(value)) {
      throw new BadRequestException('Validation failed: Not an array');
    }
    return value.map((val) => {
      const parsed = parseInt(val, 10);
      if (isNaN(parsed)) {
        throw new BadRequestException(
          `Validation failed: "${val}" is not a number`,
        );
      }
      return parsed;
    });
  }
}
