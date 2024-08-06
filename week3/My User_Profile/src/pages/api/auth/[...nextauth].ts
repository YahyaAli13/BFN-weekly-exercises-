import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    Providers.Credentials({
      // Configure your own credential provider here
    }),
  ],
  callbacks: {
    async session(session, user) {
      session.userId = user.id;
      return session;
    },
  },
  database: process.env.DATABASE_URL,
});
