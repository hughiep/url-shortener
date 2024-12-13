import {
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  Redirect,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Controller()
export class AppController {
  constructor(@Inject(CACHE_MANAGER) private cacheService: Cache
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
}
