import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { Drawer, IconButton, Typography } from '@mui/material'
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import CustomTextField from 'src/@core/components/mui/text-field'

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

function AgregarAlumno() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  const handleOpenDrawer = () => {
    setOpenDrawer(true)
  }

  const handleCloseDrawer = () => {
    setOpenDrawer(false)
  }

  const añadirAlumno = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
  }

  return (
    <React.Fragment>
      <Button variant='contained' sx={{ '& svg': { mr: 2 } }} onClick={handleOpenDrawer}>
        <Icon icon='ic:round-add' fontSize='1.125rem' />
        Añadir
      </Button>
      <Drawer
        anchor={'right'}
        open={openDrawer}
        onClose={handleCloseDrawer}
        sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
      >
        <Header>
          <Typography variant='h5'>Añadir Alumno</Typography>

          <IconButton
            size='small'
            onClick={handleCloseDrawer}
            sx={{
              p: '0.438rem',
              borderRadius: 1,
              color: 'text.primary',
              backgroundColor: 'action.selected',
              '&:hover': {
                backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.16)`
              }
            }}
          >
            <Icon icon='tabler:x' fontSize='1.125rem' />
          </IconButton>
        </Header>
        <Box sx={{ p: theme => theme.spacing(0, 6, 6) }}>
          <form>
            <CustomTextField fullWidth sx={{ mb: 4 }} label='DNI' placeholder='Ingrese DNI' />
            <CustomTextField fullWidth sx={{ mb: 4 }} label='Nombre' placeholder='Ingrese Nombre' />
            <CustomTextField fullWidth sx={{ mb: 4 }} label='Apellido Paterno' placeholder='Ingrese Apellido Paterno' />
            <CustomTextField fullWidth sx={{ mb: 4 }} label='Apellido Materno' placeholder='Ingrese Apellido Materno' />
            <CustomTextField fullWidth sx={{ mb: 4 }} label='Teléfono' placeholder='Ingrese Teléfono' />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button variant='contained' sx={{ mr: 3 }}>
                Guardar
              </Button>
              <Button variant='tonal' color='secondary' onClick={handleCloseDrawer}>
                Cancelar
              </Button>
            </Box>
          </form>
        </Box>
      </Drawer>
    </React.Fragment>
  )
}

export default AgregarAlumno
