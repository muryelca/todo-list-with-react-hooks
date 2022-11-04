import { Typography } from '@mui/material'
import React from 'react'

export const HomeTitle = () => {
  return (
    <Typography
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2.4rem',
        fontWeight: 'bold',
      }}
    >
      Faça aqui sua lista de tarefas.
    </Typography>
  )
}

export default HomeTitle
