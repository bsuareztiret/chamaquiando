import { ObjectId } from 'mongodb';
import mongoose, { Document, Schema } from 'mongoose';

export interface IAgenda extends Document {
  _id: ObjectId | number;
  date: string;
  address: string;
  description: string;
}

const agendaSchema = new Schema<IAgenda>({
  date: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.models.Agenda || mongoose.model<IAgenda>('Agenda', agendaSchema);