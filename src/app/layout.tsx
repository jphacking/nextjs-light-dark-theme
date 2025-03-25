// src/app/layout.tsx

import "@/app/globals.css"; // Import global Tailwind and custom styles

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
        <title>Light Dark Mode</title>
        <meta
          name="description"
          content="A sample project demonstrating light/dark mode switching with responsive design and modern JavaScript best practices."
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
