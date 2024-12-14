import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './db/database.module';
import { AppController } from './app.controller';
import { ShortenerService } from './app.service';
import { RedisService } from './shared/redis.service';
import { GeneratorService } from './shortener/generator.service';
import { urlShortenerProviders } from './shortener/shortener.provider';


@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [
    ShortenerService,
    GeneratorService,
    RedisService,
    ...urlShortenerProviders],
})
export class AppModule {}
