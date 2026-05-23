import { FileDown } from 'lucide-react'
import { site } from '../../data/site'

const resumeFilename = 'Bryan-Juarez-Hernandez-Resume.pdf'

type ResumeDownloadButtonProps = {
  className?: string
}

export function ResumeDownloadButton({ className = '' }: ResumeDownloadButtonProps) {
  return (
    <a
      href={site.resumeUrl}
      download={resumeFilename}
      className={`ledger-control ledger-control--secondary ${className}`.trim()}
      aria-label="Download resume PDF"
    >
      <FileDown className="ledger-control__icon" aria-hidden />
      <span>Resume</span>
    </a>
  )
}
