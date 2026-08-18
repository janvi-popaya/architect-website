import './globals.css';

export const metadata = {
  title: "Joey's Atelier — Architecture & Spatial Design",
  description: 'Contemporary architecture shaped by culture, climate and everyday life.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
