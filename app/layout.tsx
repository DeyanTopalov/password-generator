import type { Metadata } from "next";
import { jetBrainsMono } from "./ui/fonts";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Password Generator App",
  description: "Frontend Mentor challenge to build Password Generator App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.className} grid h-svh w-svw place-content-center gap-0 bg-clr-gray-900 text-left text-[1.75rem] text-lg text-clr-gray-200 antialiased md:h-screen md:w-full`}
      >
        <main className="grid h-svh w-svw place-items-center px-4 md:max-w-[90rem]">
          {children}
        </main>
      </body>
    </html>
  );
}
