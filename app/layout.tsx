import type { Metadata } from "next";
import { Great_Vibes, Montserrat, Lora } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import BackgroundAudio from "@/components/atoms/BackgroundAudio";

const greatVibes = Great_Vibes({
  weight: ["400"],
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thiệp mời đám cưới của Nam và Thuỳ",
  description: "Đám cưới của Nam và Thuỳ",
  openGraph: {
    images: [
      {
        url: 'https://linh4271714.github.io/wedding-invitation-XuanNam-PhuongThuy/thumbnail/bg1.png', // Must be a full, absolute URL
        width: 1200,
        height: 630,
        alt: 'Ourm wedding',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${greatVibes.className} ${montserrat.className} ${lora.className}`}>
        <Providers>
          {children}
          <BackgroundAudio />
        </Providers>
      </body>
    </html>
  );
}
