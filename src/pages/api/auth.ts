import { verify } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const Auth = async (req: NextApiRequest, res: NextApiResponse) => {
  const { cookie } = req.body;
  if (req.method === 'POST') {
    const token = cookie;
  
    if (!token) {
      return res.status(401).json({ message: "Unauthorized"});
    }
    // Always check this
    const secret = process.env.JWT_SECRET || "";
  
    try {
      verify(token, secret);
  
      const response = {
        accepted: "Super Top Secret User",
      };
  
      return res.status(200).json(response)
    } catch (e) {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
  } else {
    return res.status(500).json({
      message: "Something went wrong",
    })
  }
}

export default Auth;