import Navbar from "@/Componentss/Navbar";
import localFont from 'next/font/local'
import "@uploadthing/react/styles.css";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900 ",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const gotham = localFont({
  src: "./fonts/Gotham_Black.otf",
  variable: "--font-gotham-black",
  weight: "100 900",
});





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
