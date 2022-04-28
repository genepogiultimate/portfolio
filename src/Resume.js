import { Stack } from '@mui/material'
import React from 'react'
import GeneCard from './Card'
import Content from './Content'
const Resume = () => {
  return (
    <Stack direction="row">
        <GeneCard/>
        <Content/>
    </Stack>
  )
}

export default Resume