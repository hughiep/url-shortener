import { Document } from 'mongoose';

export interface Url extends Document {
  readonly originalUrl: string;
  readonly shortPath: string;
  readonly expireAt: Date;
  readonly createdAt: Date;
  readonly userId: string;
}
