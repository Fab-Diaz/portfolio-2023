import { ReactElement, useContext } from 'react'
import { useRouter } from 'next/dist/client/router'
import { PageTransitionerContext } from '@/context'

export type DelayedLinkProps = {
  link: string
  onClick?: () => void
  children: JSX.Element
}

export const DelayedLink = ({
  link,
  onClick,
  children,
}: DelayedLinkProps): ReactElement<unknown> => {
  const router = useRouter()
  const { setTransitionState, setTarget } = useContext(PageTransitionerContext)

  const delayAndGo = (e: any) => {
    e.preventDefault()

    setTarget(link)
    setTransitionState('closing')
    setTimeout(() => {
      setTransitionState('awaiting')
      console.log(link)
      onClick ? onClick() : router.push(link)
    }, 400)
  }

  return <a onClick={delayAndGo}>{children}</a>
}
