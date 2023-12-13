import Providers from "./Providers"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Slot Tracker</title>
      <body className="bg-[url('../public/neonBoard.jpg')] bg-cover">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}