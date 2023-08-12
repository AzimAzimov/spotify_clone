import React from "react";
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'

import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/player/Player";
import Sidebar from '@/components/sidebar/Sidebar'
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from '@/providers/SupabaseProvider'
import ToasterProvider from "@/providers/ToasterProvider";
import UserProvider from "@/providers/UserProvider";

import './globals.css'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Музыка с тобой, всегда!',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId()

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
            <Player/>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
