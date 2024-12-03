import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { ShortenerService } from './shortener.service';
import { ShortenUrlDto } from './shortener.dto';

/**
 * Shortener Controller
 */
@Controller()
export class ShortenerController {
  constructor(private shortenerService: ShortenerService) {}

  @Get(':shortPath')
  @Redirect(undefined, HttpStatus.FOUND)
  async redirect(@Param('shortPath') shortPath: string) {
    const originalUrl = await this.shortenerService.getOriginalUrl(shortPath);
    return { url: originalUrl };
  }

  // https://docs.nestjs.com/controllers#request-payloads
  @Post('/shorten')
  async shorten(@Body() shortenUrlDto: ShortenUrlDto) {
    const shortPath = await this.shortenerService.shortenUrl(
      shortenUrlDto.url,
      'fakeUserId',
    );
    return { shortPath };
  }
}
