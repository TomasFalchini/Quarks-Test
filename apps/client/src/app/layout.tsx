import NavBar from "@/components/NavBar"
import "./globals.css"
import { Poppins } from "next/font/google"
import { Toaster } from "react-hot-toast"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "Quarks App",
  description: "Challenge by Tomás Falchini",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster />
        <nav>
          <NavBar />
        </nav>
        {children}
      </body>
    </html>
  )
}
