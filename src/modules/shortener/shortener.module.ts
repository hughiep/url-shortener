import { Module } from '@nestjs/common';

import { ShortenerController } from './shortener.controller';
import { ShortenerService } from './shortener.service';
import { DatabaseModule } from '../database.module';
import { urlShortenerProviders } from './shortener.provider';
import { GeneratorService } from './generator.service';

/**
 * Shortener module
 */
@Module({
  imports: [DatabaseModule],
  controllers: [ShortenerController],
  providers: [ShortenerService, GeneratorService, ...urlShortenerProviders],
})
export class ShortenerModule {}
