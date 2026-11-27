import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata = {
  title: "Muhammad Jan — Software Engineer",
  description:
    "Software Engineer specializing in Next.js, MongoDB, and modern web experiences.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}