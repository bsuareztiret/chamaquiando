import { ObjectId } from 'mongodb';
import mongoose, { Document, Schema } from 'mongoose';

export interface IUsers extends Document {
  _id: ObjectId | number;
  name: string;
  password: string;
  description: string;
}

const usersSchema = new Schema<IUsers>({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.models.Users || mongoose.model<IUsers>('Users', usersSchema);