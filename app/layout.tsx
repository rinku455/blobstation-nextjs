import Navigation from "./components/naviation";
import "./globals.css";
import { Urbanist } from "next/font/google";
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&display=swap" rel="stylesheet"/>

const urbanist = Urbanist({ subsets: ["latin"] });


// import localFont from '@next/font/local'
// const  Santoshi =localFont({  src: ('../fonts/Satoshi-VariableItalic.woff') })

export const metadata = {
  title: "my App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
