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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8735497325725812"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors">
        {children}
      </body>
    </html>
  );
}
