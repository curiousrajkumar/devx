"use client"

import React from 'react'
import Link from 'next/link'
import { useAuth, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Button } from '@/components/ui/button'

function Navbar() {
  const { isSignedIn } = useAuth()

  return (
    <nav className='p-4 bg-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-transparent'>
      <div className='max-w-5xl mx-auto w-full flex justify-between items-center'>
        <Link href={'/'} className='flex items-center gap-2'>
          <img src={'/r1devx-logo.svg'} alt='Vibe' width={32} height={32} />
        </Link>

        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <div className='flex gap-2'>
            <SignInButton>
              <Button variant={'outline'} size={'sm'}>Sign In</Button>
            </SignInButton>
            <SignUpButton>
              <Button size={'sm'}>Sign Up</Button>
            </SignUpButton>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar