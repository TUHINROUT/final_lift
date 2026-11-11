import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EVIO Elevator | Elevators, Escalators, Modernization & AMC",
  description:
    "EVIO Elevator, founded in 2005, delivers innovative, reliable and eco-friendly elevator solutions across India — automatic, manual, hospital, goods, MRL and home elevators, backed by ISO 9001:2015 and ISO 45001:2018 certification.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-bg text-text">{children}</body>
    </html>
  );
}
