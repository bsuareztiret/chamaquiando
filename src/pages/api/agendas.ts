import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '../../../utils/db-connect';
import Agenda from '../../../models/agenda';

dbConnect();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const agendas = await Agenda.find();
      res.status(200).json({ agendas });
    } else if (req.method === 'POST') {
      const { date, address, description } = req.body;
      const agenda = new Agenda({ date, address, description });
      await agenda.save();
      res.status(201).json({ agenda });
    } else if (req.method === 'PUT') {
      // Mettez à jour l'événement
    } else if (req.method === 'DELETE') {
      const id = req.query.id
      const agendas = await Agenda.findByIdAndDelete(id);
      res.status(200).json({ agendas });
    } else {
      res.status(400).json({ error: 'Méthode HTTP non prise en charge.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors du traitement de la demande.' });
  }
}