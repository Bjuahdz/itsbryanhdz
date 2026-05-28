import type { SocialLink } from '../types'

export const site = {
  name: 'Bryan Juarez Hernandez',
  brandMonogram: 'BJH',
  title: 'Technical product operations, implementation support, systems analysis',
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
    "I'm a Computer Science graduate from Georgia with hands-on operations, client service, inventory reporting, and technical project experience. I'm positioning my work toward entry-level product operations, implementation, solutions, business analyst, and systems analyst roles where clear communication and structured problem solving matter.",
  /** Eight words each - keeps every brief slot flipping in unison. */
  briefPhrases: [
    'CS graduate connecting operations, systems, and user needs.',
    'Product operations mindset grounded in technical implementation fundamentals.',
    'Client-facing experience shaped by coordination and documentation habits.',
  ],
  email: 'bryanjuarez91286@gmail.com',
  location: 'Marietta, Georgia',
  bio: "I'm interested in product operations, implementation, solutions, and analyst-style work that turns messy operational details into clearer documentation, workflows, and usable tools. My background combines CS coursework, fabrication and merchandising support, estimating/take-off assistance, inventory reporting, scheduling coordination, and customer communication.",
  resumeUrl: '/resume/Bryan_Juarez_Resume.pdf',
  avatarUrl: '/images/grad_photo.png',
  skillGroups: [
    {
      label: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'HTML', 'CSS'],
    },
    {
      label: 'Frameworks',
      items: ['React', 'Node.js', 'Next.js', 'Tailwind CSS'],
    },
    {
      label: 'Tools',
      items: ['Git', 'SQL', 'Linux', 'Figma', 'MS Office'],
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
]
