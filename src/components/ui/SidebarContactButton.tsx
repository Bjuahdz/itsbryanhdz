import { Send } from 'lucide-react'
import { AppLink } from './AppLink'

export function SidebarContactButton() {
  return (
    <AppLink
      href="/#contact"
      className="ledger-control ledger-control--primary"
      aria-label="Contact me"
    >
      <Send className="ledger-control__icon" aria-hidden />
      <span>Contact Me</span>
    </AppLink>
  )
}
