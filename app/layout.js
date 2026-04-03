<<<<<<< HEAD
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata = {
  title: "Muhammad Jan — Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, MongoDB, and modern web experiences.",
=======
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Jan - Full Stack Developer",
  description:
    "Showcasing my projects and skills as a Full Stack Developer specializing in Next.js and MongoDB.",
>>>>>>> 0a89b6af442d415880a0923e6bb9ac9fe037607e
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={`${outfit.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  );
}
=======
      <body className={inter.className}>{children}</body>
    </html>
  );
}
>>>>>>> 0a89b6af442d415880a0923e6bb9ac9fe037607e
