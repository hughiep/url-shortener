/**
 * Append env variables to process.env
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REDIS_PASSWORD: string;
    }
  }
}
