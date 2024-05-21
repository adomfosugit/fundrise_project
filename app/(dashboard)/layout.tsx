import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftSidebar from "@/components/LeftSidebar";
import Bottombar from "@/components/Bottombar";
import { ClerkProvider } from "@clerk/nextjs";
import MobileNav from "@/components/MobileNav";
import 'mapbox-gl/dist/mapbox-gl.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Investor",
  description: "An investment Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={inter.className}>
       <div className = 'w-full md:flex  bg-gray-50'>
        <div>
        <MobileNav />
        <LeftSidebar />

        </div>
         <section className="h-full flex w-full" >
            {children}
         </section>
     
       </div>      
        </body>
    </html>

    </ClerkProvider>
  );
}

