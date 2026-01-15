import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "../components/Header";
import { Analytics } from "@vercel/analytics/next"


const jetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "NM Naveen Prabhu",
  description: "Naveen's personal chess coaching practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
      <Header />
      {children}
      </body>
    </html>
  );
}
