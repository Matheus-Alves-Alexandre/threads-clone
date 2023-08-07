import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Topbar from "@/components/share/Topbar";
import LeftSideBar from "@/components/share/LeftSideBar";
import RightSideBar from "@/components/share/RightSideBar";
import Bottonbar from "@/components/share/Bottonbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads",
  description: "a Next.js 13 meta Threads Application",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main>
            <LeftSideBar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSideBar />
          </main>
          <Bottonbar />
        </body>
      </html>
    </ClerkProvider>
  );
}
