import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftSidebar from "@/components/LeftSidebar";
import Bottombar from "@/components/Bottombar";
import { ClerkProvider } from "@clerk/nextjs";
import MobileNav from "@/components/MobileNav";
import 'mapbox-gl/dist/mapbox-gl.css';
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

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
          <div className="flex flex-col ">
            <div className="flex flex-grow ">
              {/* Sidebar: Hidden on small screens, shown on larger screens */}
              <div className="hidden md:flex md:w-[250px] flex-none">
                <LeftSidebar />
              </div>

              {/* Mobile Navigation: Shown only on small screens */}
              <div className="md:hidden">
                <MobileNav />
              </div>

              {/* Main Content Area */}
              <section className="flex-grow w-full pt-[30px] ">
                <Toaster />
              

                {children}
              
              </section>
            </div>

          
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
