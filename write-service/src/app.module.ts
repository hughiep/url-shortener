import { Module } from '@nestjs/common';
import { ShortenerModule } from './modules/shortener/shortener.module';
import { ConfigModule } from '@nestjs/config';
import { CacheModule, CacheStore } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';

@Module({
  imports: [
    ShortenerModule,
    ConfigModule.forRoot(),
    CacheModule.registerAsync({
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
    }),
  ],
})
export class AppModule {}
