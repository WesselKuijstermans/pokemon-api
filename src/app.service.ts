import { Injectable } from '@nestjs/common';
const Type = require('./models/type/types.schema');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
