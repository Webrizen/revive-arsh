import Link from 'next/link'
import NavigationStatusUpdater from '../context/navigation-status-updater'

export default function ReviveLink({ children, ...props }) {
  return (
    <Link {...props}>
      {children}
      <NavigationStatusUpdater />
    </Link>
  )
}