import { NextApiRequest } from 'next';
import { User } from '../utils/users'; // Assure-toi que le chemin est correct pour inclure la définition de User

declare module 'next' {
  export interface NextApiRequest {
    user?: User; // On ajoute la propriété user dans l'objet NextApiRequest
  }
}