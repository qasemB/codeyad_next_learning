import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Codeyad',
  description: 'User management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
