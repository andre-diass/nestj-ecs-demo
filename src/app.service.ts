import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return  `PORTAaaa: ${process.env.NODE_ENV}`;
  }
}
