import { TimelineComponentFragment } from '@generated/graphql-request'
import TimelineComponent from './Component'

interface Props {
  paragraph: TimelineComponentFragment
}

export default function TimelineParagraph ({ paragraph }: Props): JSX.Element {
  const { title, items } = paragraph

  return (
    <TimelineComponent
      title={title} items={items.map((item) => {
        return {
          id: item.id,
          date: item.date,
          title: item.title,
          image: (item.image != null)
            ? {
                src: item.image.image.src,
                alt: item.image.image.alt
              }
            : undefined,
          body: item.description
        }
      })}
    />
  )
}
