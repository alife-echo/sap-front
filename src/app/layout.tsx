export const metadata = {
  title: 'SAP',
  description: 'Generated by React',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
      <link rel="icon"  href="/produtos.png"  sizes="64x64"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
