import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, User as PrismaUser } from '@prisma/client';
import { User } from '../../types';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const user: PrismaUser | null = await prisma.user.findUnique({ where: { id: 1 } });
    if (user) {
      const { id, name, email, profilePicture }: User = user;
      return res.status(200).json({ id, name, email, profilePicture });
    }
    return res.status(404).json({ message: 'User not found' });
  }

  if (req.method === 'PUT') {
    const { name, email, profilePicture }: User = req.body;
    const updatedUser: PrismaUser | null = await prisma.user.update({
      where: { id: 1 },
      data: { name, email, profilePicture },
    });
    if (updatedUser) {
      const { id, name, email, profilePicture }: User = updatedUser;
      return res.status(200).json({ id, name, email, profilePicture });
    }
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(405).json({ message: 'Method not allowed' });
};
