import { useEffect, useState, type ReactNode } from 'react'
import { site, socials } from '../../data/site'
import { useHeroScroll } from '../../hooks/useHeroScroll'
import {
  getSectionScrollMetric,
  HOME_SCROLL_SECTIONS,
  isAtPageBottom,
  resolveActiveScrollSection,
  type HomeScrollSectionId,
} from '../../utils/homeScrollSpy'
import { ResumeDownloadButton } from '../ui/ResumeDownloadButton'
import { SidebarContactButton } from '../ui/SidebarContactButton'
import { AppLink } from '../ui/AppLink'
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '../ui/BrandIcons'
import { SidebarThemeToggle } from '../ui/SidebarThemeToggle'
import { Hero } from './Hero'

type ArchiveLayoutProps = {
  children: ReactNode
  pathname: string
}

const navItems = [
  { id: 'projects', label: 'Projects', ariaLabel: 'Go to projects', link: '/#projects', type: 'section' as const },
  {
    id: 'experience',
    label: 'Experience',
    ariaLabel: 'Go to experience timeline',
    link: '/#experience',
    type: 'section' as const,
  },
  {
    id: 'education',
    label: 'Education',
    ariaLabel: 'Go to education',
    link: '/#education',
    type: 'section' as const,
  },
  { id: 'about', label: 'About Me', ariaLabel: 'Go to about me', link: '/#about', type: 'section' as const },
  { id: 'contact', label: 'Contact', ariaLabel: 'Go to contact', link: '/#contact', type: 'section' as const },
]

type ScrollSectionId = HomeScrollSectionId

const GEORGIA_OUTLINE_PATH =
  'M0 0 C15.00362251 -0.02338636 30.0072436 -0.04100734 45.01088047 -0.05181217 C51.97771884 -0.05696295 58.94454587 -0.06398239 65.91137695 -0.07543945 C72.63516839 -0.08649153 79.35894561 -0.09228517 86.08274651 -0.09487724 C88.64755374 -0.09672442 91.21236033 -0.10033146 93.77716255 -0.10573006 C97.37041745 -0.11299239 100.96362371 -0.11398874 104.55688477 -0.11352539 C106.14616287 -0.1189183 106.14616287 -0.1189183 107.76754761 -0.12442017 C112.95620416 -0.11718377 117.88780793 0.09515279 123 1 C121.6738993 3.91997173 120.18964438 6.04302874 118 8.375 C115.32568207 11.39502245 113.96865865 14.02849953 113 18 C113.47308594 18.35191406 113.94617188 18.70382813 114.43359375 19.06640625 C115.42552734 19.80697266 115.42552734 19.80697266 116.4375 20.5625 C117.53384766 21.37654297 117.53384766 21.37654297 118.65234375 22.20703125 C120.21317273 23.39907867 121.74793029 24.62608376 123.25390625 25.88671875 C128.1177212 29.92157045 131.73816023 31.97533531 138 33 C138.12375 33.804375 138.2475 34.60875 138.375 35.4375 C138.58125 36.283125 138.7875 37.12875 139 38 C139.66 38.33 140.32 38.66 141 39 C142.91896516 42.99144754 144.33300065 46.59780431 145 51 C145.99 51.33 146.98 51.66 148 52 C148.94921875 54.06640625 148.94921875 54.06640625 149.6875 56.5625 C149.93886719 57.38878906 150.19023437 58.21507812 150.44921875 59.06640625 C150.72185547 60.02353516 150.72185547 60.02353516 151 61 C151.66 61 152.32 61 153 61 C153.2475 61.639375 153.495 62.27875 153.75 62.9375 C154.81562433 65.18741541 154.81562433 65.18741541 157.125 65.75 C157.74375 65.8325 158.3625 65.915 159 66 C159 66.99 159 67.98 159 69 C159.70125 69.20625 160.4025 69.4125 161.125 69.625 C165.89233066 71.90502771 169.18937685 75.14714709 171.3125 80 C173.49089624 83.87270443 176.20112864 85.2507054 179.90625 87.56640625 C182.56509933 89.38692435 183.80444179 91.01110447 185 94 C185.144375 95.010625 185.28875 96.02125 185.4375 97.0625 C186.13816082 100.72150651 187.28211185 101.50248116 190 104 C190.97375509 105.32211254 191.93071236 106.65668268 192.875 108 C196.26633598 112.59278917 199.85324741 115.21560963 205.25 117.1875 C208 119 208 119 208.71484375 121.046875 C209.02266649 122.60379664 209.28066761 124.17166073 209.48046875 125.74609375 C209.84043908 128.08587351 209.84043908 128.08587351 211.5078125 129.80078125 C213.63773569 132.93990889 213.56591577 136.07468255 213.6875 139.75 C213.72166016 140.44738281 213.75582031 141.14476562 213.79101562 141.86328125 C213.87308295 143.57497108 213.93822919 145.2874576 214 147 C214.7734375 147.28746094 215.546875 147.57492188 216.34375 147.87109375 C222.00077814 150.27533071 225.15989122 155.16432009 228.02734375 160.390625 C229.17549725 163.47081191 229.25254422 166.03491742 229.3125 169.3125 C229.33734306 172.33124208 229.33734306 172.33124208 230 175 C231.95770313 176.76193281 233.60616384 177.5131515 236.08984375 178.3515625 C238 179 238 179 240 181 C240.66 181 241.32 181 242 181 C242 182.32 242 183.64 242 185 C240.02 185 238.04 185 236 185 C236.99 187.475 236.99 187.475 238 190 C234.7 189.67 231.4 189.34 228 189 C228 189.66 228 190.32 228 191 C228.825 191.45375 229.65 191.9075 230.5 192.375 C231.325 192.91125 232.15 193.4475 233 194 C233 195.32 233 196.64 233 198 C230.03 198.99 230.03 198.99 227 200 C227.33 202.31 227.66 204.62 228 207 C227.34 207 226.68 207 226 207 C225.34 207.99 224.68 208.98 224 210 C222.68 210 221.36 210 220 210 C220.226875 210.515625 220.45375 211.03125 220.6875 211.5625 C221.16513722 215.28807032 219.61290239 217.64516304 218 221 C218.66 221 219.32 221 220 221 C221 224 221 224 220 227 C220.38932856 229.14255793 220.38932856 229.14255793 221 231 C220.34 231 219.68 231 219 231 C218.34 232.32 217.68 233.64 217 235 C216.34 235 215.68 235 215 235 C214.96261719 235.60328125 214.92523438 236.2065625 214.88671875 236.828125 C214.23374341 244.76625659 214.23374341 244.76625659 211 248 C212.32 248.33 213.64 248.66 215 249 C214.67 251.31 214.34 253.62 214 256 C213.34 256 212.68 256 212 256 C212.0309375 257.2065625 212.0309375 257.2065625 212.0625 258.4375 C212 261 212 261 211 262 C202.55046599 262.93883711 194.69077566 259.12701867 187 256 C187 256.99 187 257.98 187 259 C185.68 259 184.36 259 183 259 C183.33 260.98 183.66 262.96 184 265 C183.34 265 182.68 265 182 265 C182.33 265.639375 182.66 266.27875 183 266.9375 C185.0217317 273.12905333 184.46482626 278.99198599 182 285 C179.69 284.67 177.38 284.34 175 284 C173.77036367 280.31109101 173.44329599 276.86300794 173 273 C156.75732386 271.70388983 140.51196663 270.54697589 124.2480545 269.55329895 C120.71563227 269.33685725 117.1834462 269.11687095 113.65130615 268.89587402 C103.63261576 268.26904129 93.6138505 267.64368515 83.59423828 267.03173828 C77.41061236 266.65381845 71.22751716 266.2680806 65.04470062 265.87715149 C62.7053295 265.73071922 60.36577398 265.58720167 58.02603912 265.44670105 C54.77498544 265.25117411 51.52470326 265.04568768 48.27441406 264.83789062 C47.31760239 264.7827681 46.36079071 264.72764557 45.37498474 264.67085266 C40.63146974 264.35691411 36.41903498 263.91896202 32 262 C30.84741211 260.27929687 30.84741211 260.27929687 30.27734375 258.21875 C30.05119385 257.4644873 29.82504395 256.71022461 29.59204102 255.93310547 C29.37604248 255.13018066 29.16004395 254.32725586 28.9375 253.5 C27.39902247 248.25385846 25.97147823 243.55186555 23.0625 238.875 C19.57256922 232.47679357 20.84316812 224.9409913 22 218 C22.66283527 216.66475784 23.32876715 215.33104045 24 214 C24.02977744 211.62698611 24.02977744 211.62698611 23.625 209.25 C23.51414062 208.45078125 23.40328125 207.6515625 23.2890625 206.828125 C23.19367187 206.22484375 23.09828125 205.6215625 23 205 C22.34 205 21.68 205 21 205 C20.10404269 199.76954654 19.76212098 195.47190607 21.34765625 190.30078125 C22.07548634 187.88032818 22.07548634 187.88032818 22.55859375 184.85546875 C23.96003954 177.23891552 25.73449935 172.72058268 32 168 C31.525625 167.525625 31.05125 167.05125 30.5625 166.5625 C28.92972165 163.8847435 28.79975359 162.84156227 28.625 159.8125 C28.26763548 155.15915778 26.61168831 152.27880227 24.2109375 148.3515625 C22.2018911 144.45012401 21.60321211 140.31251646 21 136 C20.34 136 19.68 136 19 136 C17.36478854 126.7440861 15.7591433 117.58531373 15.2109375 108.1875 C15.12803203 105.9566485 15.12803203 105.9566485 14 104 C13.65234135 101.14569323 13.34358693 98.29835935 13.0625 95.4375 C12.89048181 93.78085494 12.71475067 92.12459086 12.53515625 90.46875 C12.456604 89.72302734 12.37805176 88.97730469 12.29711914 88.20898438 C11.89842886 85.24485156 11.23686554 82.37377167 10.50390625 79.4765625 C9.60640173 75.06557129 9.18572114 70.58508559 8.69726562 66.11303711 C8.62056641 65.41186768 8.54386719 64.71069824 8.46484375 63.98828125 C8.39120605 63.30975098 8.31756836 62.6312207 8.24169922 61.93212891 C8.0209844 60.16774804 7.70473954 58.41599265 7.37890625 56.66796875 C7 54 7 54 8 51 C7.34 51 6.68 51 6 51 C5.83564453 49.16501953 5.83564453 49.16501953 5.66796875 47.29296875 C4.83255802 38.29948892 3.85290395 29.36001885 2.4375 20.4375 C2.31076904 19.63530029 2.18403809 18.83310059 2.0534668 18.0065918 C1.54615105 14.90610567 0.99521222 11.98563667 0 9 C-0.06740865 7.43881572 -0.08514456 5.8749748 -0.0625 4.3125 C-0.05347656 3.50425781 -0.04445313 2.69601563 -0.03515625 1.86328125 C-0.02355469 1.24839844 -0.01195312 0.63351563 0 0 Z'
const GEORGIA_COAST_PATH =
  'M0 0 C-0.62759865 2.92879371 -1.58622659 5.36095629 -3 8 C-3.99 7.67 -4.98 7.34 -6 7 C-5.37162381 3.35541809 -4.14650034 0 0 0 Z'

function SocialIcon({ icon, className }: { icon: string; className: string }) {
  if (icon === 'github') return <GitHubIcon className={className} />
  if (icon === 'linkedin') return <LinkedInIcon className={className} />
  if (icon === 'instagram') return <InstagramIcon className={className} />

  return null
}

function SidebarLocationMap() {
  return (
    <div
      className="sidebar-location"
      tabIndex={0}
      aria-label={`Movement map from Newnan, Georgia to ${site.location}`}
    >
      <div className="sidebar-location__map" aria-hidden="true">
        <svg viewBox="0 0 250 320" role="img">
          <path
            className="sidebar-location__state"
            d={GEORGIA_OUTLINE_PATH}
            transform="translate(5 22)"
          />
          <path
            className="sidebar-location__state sidebar-location__coast"
            d={GEORGIA_COAST_PATH}
            transform="translate(231 234)"
          />
          <circle className="sidebar-location__route-dot sidebar-location__route-dot--1" cx="70" cy="138" r="2.6" />
          <circle className="sidebar-location__route-dot sidebar-location__route-dot--2" cx="67" cy="130" r="2.6" />
          <circle className="sidebar-location__route-dot sidebar-location__route-dot--3" cx="64" cy="122" r="2.6" />
          <circle className="sidebar-location__route-dot sidebar-location__route-dot--4" cx="62" cy="114" r="2.6" />
          <circle className="sidebar-location__route-dot sidebar-location__route-dot--5" cx="60" cy="106" r="2.6" />
          <circle className="sidebar-location__route-dot sidebar-location__route-dot--6" cx="60" cy="99" r="2.6" />
          <g className="sidebar-location__home-marker" aria-hidden="true">
            <circle className="sidebar-location__home-badge" cx="72" cy="146" r="9.5" />
            <path
              className="sidebar-location__home-icon"
              d="M63 146 L72 138 L81 146 M66 144 L66 154 L70 154 L70 149 L74 149 L74 154 L78 154 L78 144"
            />
          </g>
          <circle className="sidebar-location__marietta-ring" cx="61" cy="92" r="9" />
          <circle className="sidebar-location__marker" cx="61" cy="92" r="4.8" />
          <foreignObject x="74" y="79" width="164" height="28">
            <div className="sidebar-location__place-label sidebar-location__place-label--marietta">
              Marietta, Georgia
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  )
}

export function ArchiveLayout({ children, pathname }: ArchiveLayoutProps) {
  const [activeSection, setActiveSection] = useState<ScrollSectionId>('projects')
  const { isPastHero, isHomePage } = useHeroScroll({ pathname })
  const showSidebarFooter = !isHomePage || isPastHero

  const displayedActiveSection: ScrollSectionId | null =
    pathname === '/projects'
      ? 'projects'
      : isHomePage
        ? isPastHero
          ? activeSection
          : null
        : null

  useEffect(() => {
    if (pathname === '/projects' || pathname === '/blog') {
      return
    }

    const updateActiveSection = () => {
      if (isHomePage && !isPastHero) {
        return
      }

      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const scrollOffset =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue('--scroll-offset'),
        ) || 16
      const viewportTop = scrollY + scrollOffset + 8
      const viewportBottom = scrollY + viewportHeight - 32

      const sectionMetrics = HOME_SCROLL_SECTIONS.flatMap((sectionId) => {
        const section = document.getElementById(sectionId)
        if (!section) return []

        const metric = getSectionScrollMetric(section)
        return metric ? [metric] : []
      })

      const nextSection = resolveActiveScrollSection(sectionMetrics, {
        scrollY,
        viewportTop,
        viewportBottom,
        atPageBottom: isAtPageBottom(
          scrollY,
          viewportHeight,
          document.documentElement.scrollHeight,
        ),
      })

      setActiveSection(nextSection)
    }

    const updateHashSection = () => {
      const hashSection = window.location.hash.replace('#', '') as ScrollSectionId
      if ((HOME_SCROLL_SECTIONS as readonly string[]).includes(hashSection)) {
        setActiveSection(hashSection)
      }
    }

    updateActiveSection()
    updateHashSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    window.addEventListener('hashchange', updateHashSection)
    window.addEventListener('pushstate', updateHashSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
      window.removeEventListener('hashchange', updateHashSection)
      window.removeEventListener('pushstate', updateHashSection)
    }
  }, [pathname, isHomePage, isPastHero])

  return (
    <div className="relative min-h-svh">
      <Hero isHomePage={isHomePage} isPastHero={isPastHero} />

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(190px,240px)_1fr] lg:px-8 lg:py-8">
        <aside className="archive-sidebar hidden border-b border-(--color-border) pb-6 lg:sticky lg:top-8 lg:flex lg:h-[calc(100svh-4rem)] lg:flex-col lg:border-r lg:border-b-0 lg:pr-8">
          <nav className="sidebar-section-nav" aria-label="Section navigation">
            <ul className="sidebar-section-nav__list">
              {navItems.map((item) => (
                <li key={item.link}>
                  <AppLink
                    href={item.link}
                    aria-label={item.ariaLabel}
                    aria-current={displayedActiveSection === item.id ? 'page' : undefined}
                    className="sidebar-section-nav__link"
                  >
                    {item.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </nav>

          <dl className="mt-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-(--color-muted)">
                Location
              </dt>
              <dd className="mt-2">
                <SidebarLocationMap />
              </dd>
            </div>
          </dl>

          <nav className="mt-6" aria-label="Profile links">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--color-muted)">
              Profiles
            </p>
            <ul className="mt-3 grid gap-2">
              {socials.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 border border-(--color-border) px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-(--color-muted) transition hover:border-(--color-accent) hover:text-(--color-accent)"
                  >
                    <SocialIcon icon={link.icon} className="h-3.5 w-3.5" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="archive-sidebar__footer mt-auto pt-8">
            <div className="sidebar-actions">
              {showSidebarFooter && <SidebarContactButton />}
              <div className="sidebar-actions__row">
                <ResumeDownloadButton />
                {showSidebarFooter && <SidebarThemeToggle />}
              </div>
            </div>
          </div>
        </aside>

        <div className="min-w-0">{children}</div>
      </div>
    </div>
  )
}
