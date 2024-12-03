/**
 * Shortener service
 * We put all the logic of the shortener module here
 */

import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Url } from './url.interface';
import { GeneratorService } from './generator.service';

@Injectable()
export class ShortenerService {
  constructor(
    @Inject('URL_SHORTENER_MODEL')
    private readonly urlModel: Model<Url>,
    private readonly generatorService: GeneratorService,
  ) {}

  async shortenUrl(originalUrl: string, userId: string): Promise<string> {
    try {
      const shortPath = this.generatorService.generateId(originalUrl);

      const url = new this.urlModel({
        originalUrl,
        shortPath,
        userId,
        expireAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
      });
      await url.save();
      return url.shortPath;
    } catch (error) {
      console.log(error);
    }
  }

  async getOriginalUrl(shortPath: string): Promise<string> {
    const url = await this.urlModel.findOne({ shortPath }).exec();

    if (!url) {
      throw new HttpException(
        `Url ${shortPath} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    if (url.expireAt && url.expireAt < new Date()) {
      throw new HttpException(`Url ${shortPath} has expired`, HttpStatus.GONE);
    }

    return url.originalUrl;
  }
}
