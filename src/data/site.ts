import type { SocialLink } from '../types'

export const site = {
  name: 'Bryan Juarez Hernandez',
  brandMonogram: 'BJH',
  title: 'Project management, edge cases, performance, system design',
  headerHero: {
    eyebrow: 'Portfolio',
    skillsLabel: 'Stack',
    scrollLabel: 'Scroll to work',
    scrollAriaLabel: 'Scroll to projects',
  },
  aboutHero: {
    eyebrow: 'Introduction',
    title: 'About me',
  },
  tagline:
    "I'm a recent Computer Science graduate from Georgia, building practical tools at the intersection of data, systems, automation, and user experience. My path combines hands-on operations, client-facing work, and technical problem solving, which has made me especially interested in software that supports real-world teams — not just software that looks good in isolation.",
  /** Eight words each - keeps every brief slot flipping in unison. */
  briefPhrases: [
    'CS graduate building practical tools for data systems.',
    'Product minded technical work for real operations.',
    'Automation focused builds with clear usable interfaces.',
  ],
  email: 'bryanjuarez91286@gmail.com',
  location: 'Marietta, Georgia',
  bio: "I'm drawn to automotive technology, manufacturing systems, public-sector tools, and products that make complex workflows easier to understand. My current work focuses on dashboards, QA/testing workflows, automation, UX/UI, and product-minded applications that are clear, useful, and built with intention.",
  resumeUrl: '/resume/Bryan-Juarez-Hernandez-Resume.pdf',
  avatarUrl: '/images/grad_photo.png',
  skillGroups: [
    {
      label: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'HTML', 'CSS'],
    },
    {
      label: 'Frameworks',
      items: ['React', 'Node.js', 'Next.js', 'Tailwind CSS', 'PyTorch'],
    },
    {
      label: 'Tools',
      items: ['Git', 'SQL', 'Linux', 'OpenAI API', 'MS Office'],
    },
  ],
} as const

/** External profiles only - email lives in site.email / Contact section */
export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/Bjuahdz',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bryan-juarez-hernandez-54147822a',
    icon: 'linkedin',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/offbrynd/',
    icon: 'instagram',
  },
]
