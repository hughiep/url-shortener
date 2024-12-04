import { Module } from '@nestjs/common';
import { ShortenerModule } from './modules/shortener/shortener.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ShortenerModule, ConfigModule.forRoot()],
})
export class AppModule {}
