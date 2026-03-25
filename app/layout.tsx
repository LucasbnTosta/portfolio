import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Lucas Tosta Portfolio",
  description: "Backend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}