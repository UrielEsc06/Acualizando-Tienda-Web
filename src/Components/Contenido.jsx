import { Toolbar, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import theme from '../themeConfig'

const Cajon = () => {
    return (
        <Box sx={{ padding: theme.spacing(3) }}>
            <Toolbar />
            <Typography variant="body1" color="initial">
                Contenido
            </Typography>
            
        </Box>
    )
}

export default Cajon
