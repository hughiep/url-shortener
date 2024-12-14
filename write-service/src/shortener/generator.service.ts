/**
 * Generator service
 */
import { Injectable } from '@nestjs/common';
import { RedisService } from '../shared/redis.service';

// TODO: Implement a counter to generate unique ids
@Injectable()
export class GeneratorService {
  constructor(private readonly redisService: RedisService) {}

  async generateId(): Promise<string> {
    // Get the current counter
    const counter = await this.redisService.increment('counter');

    // Private method to generate the base62 string
    // It's not necessary to use MD5 hash
    // // Get MD hash from originalUrl
    // const md5hash = createHash('md5').update(`${counter}`).digest('hex');
    // // Get the first 6 characters of the hash
    // const first6Bytes = md5hash.slice(0, 6);

    // Convert to base62
    const base62 = this.base62Encode(`${counter}`);
    return base62;
  }

  /**
   * Base62 is a method of encoding arbitrary data into a string of 62 characters.
   * Suitable for use as the path of an url
   * @param str string
   * @returns encoded string
   */
  base62Encode(str: string): string {
    const charset =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let num = parseInt(str, 16);

    while (num > 0) {
      result = charset[num % 62] + result;
      num = Math.floor(num / 62);
    }

    return result;
  }
}
