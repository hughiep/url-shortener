import { Module } from '@nestjs/common';
import { ShortenerModule } from './modules/shortener/shortener.module';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    ShortenerModule,
    ConfigModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
