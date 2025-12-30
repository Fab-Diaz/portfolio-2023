import { Canvas, Vector3 } from '@react-three/fiber'
import { Box as ThreeBox, OrbitControls } from '@react-three/drei'
import { GltfModel } from '@/components'
import { useState, createElement } from 'react'

export type ModelViewerMovement = 'fixed' | 'float' | 'rotate'

export type ModelViewerOrbitsAngles = {
  minAzimuthAngle: number
  maxAzimuthAngle: number
  minPolarAngle: number
  maxPolarAngle: number
}

export type ModelViewerCamera = {
  position: number[]
}

type ModelViewerSpotlight = {
  position?: number[]
  angle?: number
  penumbra?: number
  color?: string
  helper?: boolean
}

type ModelViewerAmbientLight = {
  intensity?: number
}

type ModelViewerPointLight = {
  position?: number[]
  intensity?: number
  color?: string
  helper?: boolean
}

type ModelViewerProps = {
  modelPath: string
  scale?: number
  position?: number[]
  movement?: ModelViewerMovement
  orbits?: ModelViewerOrbitsAngles
  camera?: ModelViewerCamera
  pointLights?: ModelViewerPointLight[]
  ambientLights?: ModelViewerAmbientLight[]
  spotlights?: ModelViewerSpotlight[]
  stopWhenManipulating?: boolean
  enableZoom?: boolean
}

export const ModelViewer = ({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  orbits,
  camera,
  movement,
  pointLights,
  ambientLights,
  spotlights,
  stopWhenManipulating = true,
  enableZoom = true,
}: ModelViewerProps): React.ReactElement => {
  const [isManipulating, setIsManipulating] = useState<boolean>(false)

  return (
    <Canvas
      shadows={true}
      onMouseEnter={() => stopWhenManipulating && setIsManipulating(true)}
      onMouseLeave={() => stopWhenManipulating && setIsManipulating(false)}
    >
      {ambientLights?.map(({ intensity = 0.4 }, index) =>
        createElement('ambientLight', {
          key: `${modelPath}_ambientLight_${index}`,
          intensity,
        }),
      )}
      {pointLights?.map(
        (
          { position = [0, 0, 0], intensity = 0.4, color = 'white', helper },
          index,
        ) =>
          createElement(
            'pointLight',
            {
              key: `${modelPath}_pointLight_${index}`,
              position: position as Vector3,
              intensity,
              color,
            },
            helper && createElement(ThreeBox, { scale: 1 }),
          ),
      )}
      {spotlights?.map(
        (
          {
            position = [0, 0, 0],
            angle = 0.6,
            penumbra = 1,
            color = 'white',
            helper,
          },
          index,
        ) =>
          createElement(
            'spotLight',
            {
              key: `${modelPath}_spotLight_${index}`,
              position: position as Vector3,
              angle,
              penumbra,
              color,
            },
            helper && createElement(ThreeBox, { scale: 1 }),
          ),
      )}
      <GltfModel
        modelPath={modelPath}
        scale={scale}
        position={position}
        camera={camera}
        movement={movement}
        isManipulating={isManipulating}
      />
      {createElement(OrbitControls, {
        rotateSpeed: 1,
        enableZoom,
        minAzimuthAngle: orbits?.minAzimuthAngle ?? -10,
        maxAzimuthAngle: orbits?.maxAzimuthAngle ?? 10,
        minPolarAngle: orbits?.minPolarAngle ?? -10,
        maxPolarAngle: orbits?.maxPolarAngle ?? 10,
      })}
    </Canvas>
  )
}
