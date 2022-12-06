import { useEffect, useRef } from 'react'
import { useIsInViewport } from '@/hooks'

export interface VideoProps {
  isTest?: boolean
  link: string
}

export const Video = ({ link, isTest = false }: VideoProps): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInViewport = useIsInViewport(videoRef)

  useEffect(() => {
    if (!isTest) {
      isInViewport ? videoRef?.current?.play() : videoRef?.current?.pause()
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
