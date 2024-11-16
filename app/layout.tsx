import Naavbar from "@/app/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@uploadthing/react/styles.css";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900 ",
});

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const gotham = localFont({
  src: "./fonts/Gotham_Black.otf",
  variable: "--font-gotham-black",
  weight: "100 900",
});

export const DharmaGothicRegular = localFont({
  src: [
    {
      path: "/fonts/DharmaGothicERegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/DharmaGothicERegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "/fonts/DharmaGothicELight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/DharmaGothicEHeavy.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dharma-gothic", // Create a CSS variable for the font
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${geistSans.className}  antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["lightRose", "darkYellow", "light", "dark", "balanced"]}
        >
          <div>
            <Naavbar />
          </div>
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-H5PR95RQBJ" />
    </html>
  );
}
