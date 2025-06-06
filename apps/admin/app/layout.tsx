import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { UserProvider } from '@/lib/auth/userContext';
import { getUser } from '@/lib/db/queries';
import QueryProvider from '@/lib/QueryProvider';
import './globals.css';

const SUIT = localFont({
  src: '../assets/fonts/SUIT-Variable-ttf/SUIT-Variable.ttf',
  variable: '--font-suit',
});

export const metadata: Metadata = {
  title: '인하벤처클럽 관리자',
  description: '인하벤처클럽 관리자 페이지',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userPromise = getUser();

  return (
    <html lang="en">
      <UserProvider userPromise={userPromise}>
        <QueryProvider>
          <body className={`${SUIT.variable} antialiased bg-gray-50`}>{children}</body>
        </QueryProvider>
      </UserProvider>
    </html>
  );
}
