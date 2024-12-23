import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(`configmap ${process.env.APP}`);
    console.log(`secret ${process.env.API_KEY}`);
    return 'Hello World!';
  }
  getExample(): string {
    const file = createWriteStream('example.txt');
    for (let i = 0; i < 10000; i++) {
      file.write('Hello World\n');
    }
    file.end();
    return 'Example Kubernetes!';
  }
}
