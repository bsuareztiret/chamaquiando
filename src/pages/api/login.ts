import { NextApiRequest, NextApiResponse } from 'next';
import { sign } from 'jsonwebtoken';
import { dbConnect } from '../../../utils/db-connect';
import Users, { IUsers } from '../../../models/users';
import { serialize } from 'cookie';
import bcrypt from 'bcryptjs';
import { MAX_AGE, SALT_ROUNDS } from '../../../utils/constants';

dbConnect();

const hashPassword = async (plainPassword: string): Promise<string> => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(plainPassword, salt);
  return hashedPassword;
};

const comparePasswords = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = await req.body;
  
  const { username, password } = body;
  const user = await Users.findOne({ name: username });
  const hashedPassword = await hashPassword(password);
  const isMatch = await comparePasswords(password, user.password)

  console.log('USER: ', username, user.name);
  console.log('PASS: ', hashedPassword, user.password);
  console.log('MATH: ', isMatch);

  if (username !== user.name || isMatch === false) {
    return res.status(401).json({
      message: "Unauthorized"
    })
  }

  const secret = process.env.JWT_SECRET || "";

  const token = sign({
    username
  }, secret, {
    expiresIn: MAX_AGE
  })

  const serialized = serialize("OutSiteJWT", token, {
    // httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/",
  })

  const response = {
    message: "Authorized!"
  }

  return res.status(200).setHeader("Set-Cookie", serialized).json(response);
}

export default handler