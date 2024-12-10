import { Connection } from 'mongoose';
import { UrlSchema } from '../../schemas/url.schema';

// TODO: avoid magic strings
export const urlShortenerProviders = [
  {
    provide: 'URL_SHORTENER_MODEL',
    useFactory: (connection: Connection) => connection.model('Url', UrlSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
