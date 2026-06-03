import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
//prisma adapter uses specific tables, which need to be in schema.
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '@/db';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const AUTH_SECRET = process.env.AUTH_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET || !AUTH_SECRET) {
  throw new Error('Missing environment variables for authentication');
}

export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn
} = NextAuth({
  //needed for testing in built dev mode. Trusted domain can't always be determined for localhost. This should be handled differently in production.
  trustHost: true,
  adapter: PrismaAdapter(db),
  providers: [
    GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET
    })
  ],
  secret: AUTH_SECRET,
  callbacks: {
    //usually not needed, fixing i a bug in nextauth
    async session({ session, user }: any) {
      if (session && user) {
        session.user.id = user.id;
      }
      return session;
    }
  }
});
