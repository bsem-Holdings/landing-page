import type { Metadata } from "next";
import "./globals.css"; // This line is required to load Tailwind and your colors

export const metadata: Metadata = {
  title: "bsem Holdings",
  description: "Official Hub for bsem Holdings on Roblox",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        
        {children}
        
      </body>
    </html>
  );
}