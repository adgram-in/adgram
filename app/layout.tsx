import "./globals.css";

export const metadata = {
  title: "ADGRAM",
  description: "Discover Viral Amazon Finds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors">
        {children}
      </body>
    </html>
  );
}