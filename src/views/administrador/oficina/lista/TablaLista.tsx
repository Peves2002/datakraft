import * as React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { Box, Button, Card, CardHeader, MenuItem, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import DrawerAccion from './DrawerAccion'

// ** Type
import { OficinaType } from 'src/types/oficina'

interface CellType {
  row: OficinaType
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  alignItems: 'center',
  textAlign: 'center'
}

const ColumnaAccion = ({ id }: { id: number }) => {
  return (
    <>
      <Stack direction='row'>
        <DrawerAccion accion={'Editar'} />
        <Eliminar />
      </Stack>
    </>
  )
}

export const Eliminar = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpenEliminar = () => setOpen(true)
  const handleCloseEliminar = () => setOpen(false)

  return (
    <div>
      <IconButton sx={{ color: 'primary.main' }} onClick={handleOpenEliminar}>
        <Icon icon='tabler:trash' fontSize={20} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleCloseEliminar}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Card sx={style}>
          <CardHeader title='¿Está usted seguro de eliminar esta oficina?' />
          <Box sx={{ alignItems: 'center', textAlign: 'center' }}>
            <Button type='submit' variant='contained' sx={{ mr: 3 }}>
              Eliminar
            </Button>
            <Button variant='tonal' color='secondary' onClick={handleCloseEliminar}>
              Cancelar
            </Button>
          </Box>
        </Card>
      </Modal>
    </div>
  )
}

const columns: GridColDef[] = [
  {
    field: 'dni',
    headerName: 'N° Documento',
    flex: 0.17,
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }: CellType) => {
      const { dni } = row

      return <Typography>{dni}</Typography>
    }
  },
  {
    field: 'nombres',
    headerName: 'Nombres',
    flex: 0.17,
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }: CellType) => {
      const { nombre } = row

      return <Typography>{nombre}</Typography>
    }
  },
  {
    field: 'apellido_paterno',
    headerName: 'Apellido Paterno',
    flex: 0.17,
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }: CellType) => {
      const { apellido_paterno } = row

      return <Typography>{apellido_paterno}</Typography>
    }
  },
  {
    field: 'apellido_materno',
    headerName: 'Apellido Materno',
    flex: 0.17,
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }: CellType) => {
      const { apellido_materno } = row

      return <Typography>{apellido_materno}</Typography>
    }
  },
  {
    field: 'telefono',
    headerName: 'Teléfono',
    flex: 0.17,
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }: CellType) => {
      const { telefono } = row

      return <Typography>{telefono}</Typography>
    }
  },
  {
    field: 'accion',
    headerName: 'Acción',
    flex: 0.15,
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }: CellType) => {
      const { id } = row

      return <ColumnaAccion id={id} />
    }
  }
]

const rows = [
  { id: 1, dni: 76564395, nombre: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 949992147 },
  { id: 2, dni: 76564395, nombre: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 949992147 },
  { id: 3, dni: 76564395, nombre: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 949992147 },
  { id: 4, dni: 76564395, nombre: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 949992147 },
  { id: 5, dni: 76564395, nombre: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 949992147 },
  { id: 6, dni: 76564395, nombre: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 949992147 }
]

function TablaLista() {
  return (
    <DataGrid
      autoHeight
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 }
        }
      }}
      pageSizeOptions={[5, 10]}
    />
  )
}

export default TablaLista
