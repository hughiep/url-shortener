import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { ShortenerService } from './shortener.service';
import { CreateShortenUrlDto } from './shortener.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

/**
 * Shortener Controller
 */
@Controller()
export class ShortenerController {
  constructor(
    private shortenerService: ShortenerService,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}

  @Get(':shortPath')
  @ApiResponse({
    status: 302,
    description: 'Redirect to the original URL',
    schema: { example: { url: 'https://example.com' } },
  })
  @Redirect(undefined, HttpStatus.FOUND)
  async redirectToOriginalUrl(@Param('shortPath') shortPath: string) {
    const cachedUrl = await this.cacheService.get(shortPath);
    if (cachedUrl) {
      return { url: cachedUrl };
    }

    const originalUrl = await this.shortenerService.getOriginalUrl(shortPath);
    await this.cacheService.set(shortPath, originalUrl);
    return { url: originalUrl };
  }

  // https://docs.nestjs.com/controllers#request-payloads
  @Post('/shorten')
  @ApiResponse({
    status: 201,
    description: 'Shorten URL created',
    schema: { example: { shortPath: 'abc123' } },
  })
  async createShortenUrl(@Body() shortenUrlDto: CreateShortenUrlDto) {
    const shortPath = await this.shortenerService.shortenUrl(
      shortenUrlDto.url,
      'fakeUserId',
    );
    return { shortPath };
  }
}
