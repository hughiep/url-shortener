/**
 * Redis provider
 */
import { Provider } from '@nestjs/common';

import Redis from 'ioredis';

export const redisProvider: Provider = {
  provide: 'REDIS',
  useFactory: () => {
    return new Redis();
  },
};
