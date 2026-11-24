import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar";

import Footer from "@/components/footer";
import ThemeProvider from "@/components/theme-provider";
import { syncCurrentUser } from "@/lib/sync-user";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feedback-Fusion",
  description:
    "App foe public to vote and give feedback on ideas, features, and products.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  await syncCurrentUser();
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className="">
        <body className={`${inter.className} min-h-screen flex flex-col`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/*Navbar */}
            <Navbar />
            {/* Main section */}

            <main className="flex-1 container mx-auto px-4 py-8  ">
              {children}
            </main>
            {/*footer */}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
