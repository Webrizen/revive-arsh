'use client'

import { useEffect } from 'react';
import { useLinkStatus } from 'next/link'
import { useNavigation } from './navigation-context'

export default function NavigationStatusUpdater() {
  const { pending } = useLinkStatus()
  const { increment, decrement } = useNavigation()

  useEffect(() => {
    if (pending) increment()
    else decrement()
  }, [pending])

  return null
}