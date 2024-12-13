import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule, CacheStore } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';

@Module({
  imports: [CacheModule.registerAsync({
    isGlobal: true,
    useFactory: async () => {
      const store = await redisStore({
        password: process.env.REDIS_PASSWORD,
      });

      return {
        store: store as unknown as CacheStore,
        ttl: 60,
      };
    },
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
