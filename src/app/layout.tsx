import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Take my Hand",
  description: "Aika VRDJ new single",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
