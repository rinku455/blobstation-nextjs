import Navigation from "./components/naviation";
import "./globals.css";



// import myApp from 'next/font/local'
// const  Santoshi = myApp({ src: (  '../../src/fonts/pages') })

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
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
