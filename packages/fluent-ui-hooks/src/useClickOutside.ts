import { useEffect, RefObject } from 'react'

export function useClickOutside(
  ref: RefObject<HTMLDivElement>,
  handler: (e: MouseEvent | TouchEvent) => void
): void {
  useEffect((): (() => void) => {
    const listener = (event: MouseEvent | TouchEvent): void => {
      // @ts-ignore
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return (): void => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
