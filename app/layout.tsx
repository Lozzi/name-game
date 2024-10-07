'use client'
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { MantineProvider } from "@mantine/core";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
      <body>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
