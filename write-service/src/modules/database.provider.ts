import * as mongoose from 'mongoose';

const connectionString = `mongodb+srv://url_shortener:hiepnv@cluster0.aggri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(connectionString),
  },
];
