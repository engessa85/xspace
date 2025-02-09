import "./globals.css";
import { Roboto, Jost } from "next/font/google";


const robot = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" >
      <body className={jost.className} suppressHydrationWarning={true}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
