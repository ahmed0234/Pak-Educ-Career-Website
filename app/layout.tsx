import Navbar from "@/Componentss/Navbar";
import Footer from "@/Componentss/Footer";
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

export const DharmaGothicRegular = localFont({
  src: [
    {
      path: '/fonts/DharmaGothicERegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/DharmaGothicERegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '/fonts/DharmaGothicELight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/DharmaGothicEHeavy.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-dharma-gothic', // Create a CSS variable for the font
});





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.className}  antialiased bg-[#0a0a0a]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
