import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose, { ConnectOptions } from 'mongoose';

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error('La variable d\'environnement MONGODB_URI doit être définie.');
}

const client = new MongoClient(String(MONGODB_URI),  {
  serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
  }
}
);

let cachedConnection = false;

export async function dbConnect() {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    const options: ConnectOptions = {
    };

    const connection = await mongoose.connect(MONGODB_URI as string, options);
    cachedConnection = connection !== null;
    console.log('Connexion à la base de données MongoDB établie.');
    return connection;
  } catch (error) {
    console.log('Erreur lors de la connexion à la base de données MongoDB:', error);
    throw error;
  }
}