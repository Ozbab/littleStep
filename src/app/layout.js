import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'Little Step',
  description: 'Little Steps, Big Happiness',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}