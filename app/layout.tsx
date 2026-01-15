import "@/app/ui/global.css";
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import NavigationBar from "@/app/ui/nav-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serena",
  description: "An app that automatically re-calculates planned workouts for the day",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen font-sans bg-white dark:bg-black">
          <NavigationBar/>
          {children}
        </div>
      </body>
      </html>
  );
}
