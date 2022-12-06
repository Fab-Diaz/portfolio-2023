import { Context, createContext, ReactNode, useState } from 'react'

type PageTransitionerState = 'closing' | 'opening' | 'awaiting' | 'idle'

export type PageTransitionerContextType = {
  transitionState: PageTransitionerState
  setTransitionState: (transitionState: PageTransitionerState) => void
  target: string
  setTarget: (target: string) => void
}

export const PageTransitionerContext: Context<PageTransitionerContextType> =
  createContext<PageTransitionerContextType>({
    transitionState: 'idle',
    setTransitionState: () => undefined,
    target: '',
    setTarget: () => undefined,
  })

type PageTransitionerProviderProps = {
  children: ReactNode
}

export const PageTransitionerProvider = ({
  children,
}: PageTransitionerProviderProps): JSX.Element => {
  const [transitionState, setTransitionState] =
    useState<PageTransitionerState>('idle')
  const [target, setTarget] = useState('')

  return (
    <PageTransitionerContext.Provider
      value={{
        transitionState,
        setTransitionState,
        target,
        setTarget,
      }}
    >
      {children}
    </PageTransitionerContext.Provider>
  )
}
