import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Style from "./layout.module.css";
import utilStyle from "./utilS.module.css";

const name = "Akhlaque Channa";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="{style.container}">
          <header className={Style.header}>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpeg"
                className={utilStyle.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h1 className={utilStyle.heading2Xl}>{name}</h1>
            {children}
          </header>
        </div>
      </body>
    </html>
  );
}
