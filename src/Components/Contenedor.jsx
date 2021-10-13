import React from 'react'
import Box from '@mui/material/Box'
import Navbar from './Navbar'
import Lista from './Lista'
import Contenido from './Contenido'


const Contenedor = () => {
    return (
        <Box sx={{ display: 'flex'}}>
            <Navbar />
            <Lista />
            <Contenido />

            
        </Box>
    )
}

export default Contenedor
