import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CreateShortenUrlDto } from './shortener/shortener.dto';
import { ShortenerService } from './app.service';

@Controller()
export class AppController {
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
