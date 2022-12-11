import { Box } from '@mui/material'
import { ModelViewer } from '@/components'

export const HeroModelMinimalist = (): JSX.Element => {
  return (
    <Box component="div" height="100%" flex={60} sx={{ cursor: 'grab' }}>
      <ModelViewer
        scale={1}
        enableZoom={false}
        stopWhenManipulating={false}
        modelPath="/static/models/Minimalist_2.glb"
        movement="float"
        orbits={{
          minAzimuthAngle: 0.5,
          maxAzimuthAngle: 2.5,
          minPolarAngle: 0.5,
          maxPolarAngle: 2,
        }}
        camera={{ position: [1.5, 0.4, -0] }}
        ambientLights={[{ intensity: 0.6 }]}
        spotlights={[
          {
            position: [3, 7, 4],
            angle: 0.5,
          },
        ]}
      />
    </Box>
  )
}
