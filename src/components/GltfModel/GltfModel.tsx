import { MutableRefObject, useRef, useState } from 'react'
import { useLoader, useFrame, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { ModelViewerCamera, ModelViewerMovement } from '@/components'

type GltfModelProps = {
  modelPath: string
  scale: number
  position: number[]
  camera?: ModelViewerCamera
  movement?: ModelViewerMovement
  isManipulating?: boolean
}

export const GltfModel = ({
  modelPath,
  movement = 'fixed',
  scale = 40,
  position = [0, 0, 0],
  camera = { position: [7, 7, -7] },
  isManipulating = false,
}: GltfModelProps): JSX.Element => {
  const [movementRotationSwitch, setMovementRotationSwitch] = useState<
    'left' | 'right'
  >('left')

  const ref: MutableRefObject<any> = useRef()
  const gltf = useLoader(GLTFLoader, modelPath)

  useFrame((state) => {
    if (!ref?.current || isManipulating) return
    switch (movement) {
      case 'rotate':
        if (movementRotationSwitch === 'left') {
          if (ref.current.rotation.y < 1) {
            ref.current.rotation.y += 0.003
          } else {
            setMovementRotationSwitch('right')
          }
        }
        if (movementRotationSwitch === 'right') {
          if (ref.current.rotation.y > -1) {
            ref.current.rotation.y -= 0.003
          } else {
            setMovementRotationSwitch('left')
          }
        }
        break
      case 'float':
        const t = state.clock.getElapsedTime()
        ref.current.rotation.set(
          0.1 + Math.cos(t / 4.5) / 10,
          Math.sin(t / 4) / 4,
          0.3 - (1 + Math.sin(t / 4)) / 8
        )
        ref.current.position.y = (1 + Math.sin(t / 2)) / 10
        break
    }
  })

  useThree(({ camera: threeCamera }) => {
    threeCamera.position.set(
      camera.position[0],
      camera.position[1],
      camera.position[2]
    )
  })
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={scale}
      />
    </>
  )
}
