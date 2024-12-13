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
  ) {}

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
