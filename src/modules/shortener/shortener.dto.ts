import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO
 */
export class CreateShortenUrlDto {
  @ApiProperty()
  url: string;
}
