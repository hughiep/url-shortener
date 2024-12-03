/**
 * Redis service
 */

import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  private redisClient: Redis;

  constructor() {
    this.redisClient = new Redis({
      password: 'redis',
    });

    this.redisClient.on('error', (error) => {
      console.error(error);
    });

    this.redisClient.on('connect', () => {
      console.log('Connected to Redis');
    });
  }

  async get(key: string): Promise<string> {
    return this.redisClient.get(key);
  }

  async set(key: string, value: string): Promise<void> {
    this.redisClient.set(key, value);
  }

  /**
   * Counter
   */
  async increment(key: string): Promise<number> {
    return this.redisClient.incr(key);
  }

  async decrement(key: string): Promise<number> {
    return this.redisClient.decr(key);
  }

  async delete(key: string): Promise<void> {
    this.redisClient.del(key);
  }
}
