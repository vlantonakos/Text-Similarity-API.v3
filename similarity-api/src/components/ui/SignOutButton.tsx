'use client'

import { signOut } from 'next-auth/react'
import { FC, useState } from 'react'
import { Button } from './Button'
import { toast } from './Toast'


interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

    const signUserOut = async () => {
        setIsLoading(true)
    }

  const signInWithGoogle = async () => {
    try {
      await signOut()
    } catch (error) {
      toast({
        title: 'Error signing out',
        message: 'Please try again later.',
        type: 'error',
      })
    }
  }

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign 
    </Button>
  )
}

export default SignOutButton