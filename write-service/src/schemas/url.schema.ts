import mongoose from 'mongoose';

export const UrlSchema = new mongoose.Schema({
  originalUrl: String,
  shortPath: String,
  expireAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 60 * 24 * 7,
  },
  userId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
