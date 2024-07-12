import '@/styles/variables.scss';
import '@/styles/index.scss'
import Header from '@/components/Header';
import type { Metadata } from "next";

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
        <html lang="eng">
            <body className="wrapper">
            <Header/>
                    <main>{children}</main>
            </body>
        </html>
    );
}