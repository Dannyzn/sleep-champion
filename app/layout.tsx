import './globals.css'

export const metadata = {
  title: 'Sleep Champion',
  description: 'Track your sleep, compete globally',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
