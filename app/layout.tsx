import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Zariya — Foundation",
  description: "Phase 0 Technical Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
