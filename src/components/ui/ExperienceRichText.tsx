import ShinyText from '../react-bits/text/ShinyText/ShinyText'

type TextSegment = { type: 'plain' | 'shine'; text: string }

function splitByHighlights(text: string, highlights: string[]): TextSegment[] {
  if (!highlights.length) {
    return [{ type: 'plain', text }]
  }

  const positions = highlights
    .map((highlight) => ({ highlight, index: text.indexOf(highlight) }))
    .filter((entry) => entry.index >= 0)
    .sort((a, b) => a.index - b.index)

  if (!positions.length) {
    return [{ type: 'plain', text }]
  }

  const segments: TextSegment[] = []
  let cursor = 0

  for (const { highlight, index } of positions) {
    if (index < cursor) continue

    if (index > cursor) {
      segments.push({ type: 'plain', text: text.slice(cursor, index) })
    }

    segments.push({ type: 'shine', text: highlight })
    cursor = index + highlight.length
  }

  if (cursor < text.length) {
    segments.push({ type: 'plain', text: text.slice(cursor) })
  }

  return segments
}

type ExperienceRichTextProps = {
  text: string
  highlights?: string[]
  className?: string
  shineSpeed?: number
  shineDelay?: number
}

export function ExperienceRichText({
  text,
  highlights = [],
  className = '',
  shineSpeed = 3.2,
  shineDelay = 0,
}: ExperienceRichTextProps) {
  const segments = splitByHighlights(text, highlights)

  return (
    <span className={className}>
      {segments.map((segment, index) =>
        segment.type === 'shine' ? (
          <ShinyText
            key={`${segment.text}-${index}`}
            text={segment.text}
            useThemeColors
            speed={shineSpeed}
            delay={shineDelay}
            spread={100}
            yoyo
            className="font-medium"
          />
        ) : (
          <span key={`${segment.text}-${index}`}>{segment.text}</span>
        ),
      )}
    </span>
  )
}
