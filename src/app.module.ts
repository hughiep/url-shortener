import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortenerModule } from './modules/shortener/shortener.module';

@Module({
  imports: [ShortenerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
