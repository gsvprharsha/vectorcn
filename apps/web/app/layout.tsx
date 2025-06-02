/* Note for Devs: I have added comments throughout most of the code to make it easy for you to contribute. I hope the comments cover all functions with the necessary explanations to help you understand the code. If something is missing please do not hesitate to put up a pull request or open an issue.

Open a Issue here: https://github.com/vector-cn/vectorcn/issues/new
Open a Pull Request here: https://github.com/vector-cn/vectorcn/pulls
*/

import { Geist, Geist_Mono } from "next/font/google"
import { Metadata } from "next"
import "@vectorcn/ui/globals.css"
import { Providers } from "@/components/providers"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata ={
  title: "VectorCN",
  description: "Marketing Blocks with Tech Minimalism"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
