'use client'

import { useCursorStore } from '@stores/cursor'

export const CurrentCursorDisplay = (): JSX.Element => {
  const currentCursor = useCursorStore(state => state.currentCursor)
  return <h1>{currentCursor}</h1>
}
