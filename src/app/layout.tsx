// src/app/layout.tsx

import "../app/globals.css"; // Import global Tailwind and custom styles

// The RootLayout component wraps every page in the application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* You can include SEO tags and metadata here */}
        <title>Next.js Tailwind App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
