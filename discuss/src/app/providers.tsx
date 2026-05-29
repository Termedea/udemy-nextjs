'use client';
//nice pattern with all providers in separate file like this. Could be used for theming etc too.
import { NextUIProvider } from '@nextui-org/react';
//needed for client components. Makes it possible to use hook useSession
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
  children: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}
