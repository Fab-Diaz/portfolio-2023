import { ReactElement } from 'react'
import { Box, Stack } from '@mui/material'
import {
  DescriptionSection,
  DescriptionSectionProps,
  ImageGrid,
} from '@/components'

export type CaseBusinessProps = {
  images: string[]
  content: DescriptionSectionProps
}

export const CaseBusiness = ({
  images,
  content,
}: CaseBusinessProps): ReactElement => {
  const isColumnLayout = images.length <= 3
  return (
    <Stack
      direction={isColumnLayout ? 'column' : 'row'}
      spacing={4}
      height={isColumnLayout ? 'fit-content' : '88%'}
    >
      <Box
        component="div"
        flex={isColumnLayout ? undefined : 30}
        {...(isColumnLayout && { sx: { width: '50%', maxWidth: '50vw' } })}
      >
        <DescriptionSection {...content} />
      </Box>
      <Box component="div" flex={isColumnLayout ? undefined : 70}>
        <ImageGrid images={images} sizeMd={3} elementHeight={370} />
      </Box>
    </Stack>
  )
}
