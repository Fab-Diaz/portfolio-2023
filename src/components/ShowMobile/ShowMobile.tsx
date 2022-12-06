import { Box } from '@mui/material'
import { ModelViewer } from '@/components'

export type ShowMobileProps = {
  model: string
}

export const ShowMobile = ({ model }: ShowMobileProps): JSX.Element => (
  <Box
    component="div"
    height="70vh"
    sx={{
      cursor: 'grab',
    }}
  >
    <ModelViewer
      scale={1}
      modelPath={`/static/models/${model}`}
      movement="fixed"
      orbits={{
        minAzimuthAngle: 1.4,
        maxAzimuthAngle: 1.7,
        minPolarAngle: 1.4,
        maxPolarAngle: 1.9,
      }}
      camera={{ position: [0.7, 0, 0] }}
      ambientLights={[{ intensity: 0.6 }]}
      spotlights={[
        {
          position: [3, 3, -4],
          angle: 0.5,
        },
      ]}
    />
  </Box>
)
