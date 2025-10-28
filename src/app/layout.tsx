import './globals.css'
import type { Metadata } from "next";
import "@digdir/designsystemet-css/index.css";
import "@digdir/designsystemet-theme";

export const metadata: Metadata = {
  title: "Jobbplassen",
  description: "Jobbplassen - Finn din drømmejobb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
