import '@testing-library/jest-dom'

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: class {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
})

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  configurable: true,
  value: class {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
})

type MockIntersectionObserverEntry = {
  isIntersecting: boolean
  target: Element
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: class {
    private readonly callback: (entries: MockIntersectionObserverEntry[]) => void

    constructor(callback: (entries: MockIntersectionObserverEntry[]) => void) {
      this.callback = callback
    }

    observe(target: Element) {
      this.callback([{ isIntersecting: true, target }])
    }

    unobserve() {}
    disconnect() {}
  },
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})
