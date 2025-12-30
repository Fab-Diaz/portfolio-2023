import { ReactElement } from 'react'
import { useEffect, useRef, RefObject } from 'react'
import { useIsInViewport } from '@/hooks'

export interface VideoProps {
  isTest?: boolean
  link: string
}

export const Video = ({ link, isTest = false }: VideoProps): ReactElement => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInViewport = useIsInViewport(videoRef as RefObject<HTMLElement>)

  useEffect(() => {
    if (!isTest) {
      if (isInViewport) {
        videoRef?.current?.play()
      } else {
        videoRef?.current?.pause()
      }
    }
  }, [isInViewport])

  return (
    <video
      ref={videoRef}
      src={link}
      width="100%"
      loop={true}
      muted={true}
      controls={true}
      playsInline={true}
    />
  )
}
