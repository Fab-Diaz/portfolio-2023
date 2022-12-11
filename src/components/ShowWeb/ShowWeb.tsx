import { Box } from '@mui/material'
import { ModelViewer } from '@/components'

export type ShowWebProps = {
  model: string
  isShown?: boolean
}

export const ShowWeb = ({ model, isShown }: ShowWebProps): JSX.Element => {
  if (!isShown) return <></>
  return (
    <Box
      component="div"
      height="100%"
      sx={{
        cursor: 'grab',
      }}
    >
      <ModelViewer
        scale={1}
        enableZoom={false}
        modelPath={`/static/models/${model}`}
        movement="fixed"
        orbits={{
          minAzimuthAngle: 1.4,
          maxAzimuthAngle: 1.7,
          minPolarAngle: 1.4,
          maxPolarAngle: 1.9,
        }}
        camera={{ position: [1.5, 0, -0.1] }}
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
}
