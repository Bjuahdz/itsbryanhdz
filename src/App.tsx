import { Footer } from './components/layout/Footer'
import { ArchiveLayout } from './components/layout/ArchiveLayout'
import { SiteBackground } from './components/layout/SiteBackground'
import { Blog } from './components/sections/Blog'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { HomeProjects } from './components/sections/HomeProjects'
import { AboutMe } from './components/sections/AboutMe'
import { Education } from './components/sections/Education'
import { Projects } from './components/sections/Projects'
import { usePathname } from './hooks/usePathname'
import { useScrollToHomeHash } from './hooks/useScrollToHomeHash'

function App() {
  const pathname = usePathname()
  const normalizedPath =
    pathname === '/projects' || pathname === '/blog'
      ? pathname
      : '/'

  useScrollToHomeHash(normalizedPath === '/')

  return (
    <>
      <SiteBackground />
      <ArchiveLayout pathname={normalizedPath}>
        <main className="relative">
          {normalizedPath === '/projects' ? (
            <Projects />
          ) : normalizedPath === '/blog' ? (
            <Blog />
          ) : (
            <>
              <HomeProjects />
              <Experience />
              <Education />
              <AboutMe />
              <Contact />
            </>
          )}
        </main>
        <Footer />
      </ArchiveLayout>
    </>
  )
}

export default App
