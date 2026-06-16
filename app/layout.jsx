import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

//components
import Header from "../components/Header";
import { Analytics } from "@vercel/analytics/next"


const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-inter'
});

export const metadata = {
  title: "NM Naveen Prabhu",
  description: "Naveen's personal chess coaching practice",
};

// Applies the saved theme before paint to avoid a flash. Default is always light.
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <Header />
      {children}
      <Analytics />
      </body>
    </html>
  );
}
