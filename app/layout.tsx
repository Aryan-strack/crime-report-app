import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crime Report App",
  description: "A web app to report and view crime incidents.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen bg-black selection:bg-sky-500/20">
          <div className="Fixed insert-0 -z-10 min-h-screen">
            <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03) , transparent_50%)]" />
            <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05), transparent_50%)]" />

            <main className="pt-16">
              {children}

            </main>

          </div>

        </div>
      </body>
    </html>
  );
}