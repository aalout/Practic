import '@/styles/variables.scss';

import { Alegreya } from 'next/font/google';
import { Roboto } from 'next/font/google';
import Header from '@/components/Header';

import type { Metadata } from "next";

const alegreya = Alegreya({
    subsets: ['cyrillic'],
    variable: '--font-alegreya',
    display: 'swap',
});

const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: ['400', '700'],
    variable: '--font-roboto',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Auth",
    description: "Authorization test",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={`${alegreya.variable} ${roboto.variable}`}>
            <Header/>
            <body className="wrapper">
                    <main>{children}</main>
            </body>
        </html>
    );
}