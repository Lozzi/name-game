'use client'
import localFont from "next/font/local";
import "../../globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

/*export const metadata: Metadata = {
  title: "Jónsson Orðla",
  description: "Giskaðu á nafnið",
};*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-rows-[20px_20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h2 style={{fontSize: '36px', fontWeight: 500, width: '100%', textAlign: 'center', margin: '20px 0', color: '#e1f1fd'}}>Jónsson Orðla</h2>
        <div className="flex gap-6 flex-wrap items-center justify-center" style={{position: "sticky"}}>
          <a className={`navigation`} href="/name-game">Leikreglur</a>
          <a className={`navigation`}  href="/name-game/name/first">Fornafn</a>
          <a className={`navigation active`} href="/name-game/name/second">Millinafn</a>
       </div>
        {children}
        <ToastContainer />
       </div>
      </body>
    </html>
  );
}
