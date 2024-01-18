import * as React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { MenuItem, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'

// ** Type
import { AlumnoType } from 'src/types/alumno'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface CellType {
  row: AlumnoType
}

const RowAction = ({ id }: { id: number }) => {
  return (
    <>
      <Stack direction='row'>
        <IconButton sx={{ color: 'primary.main' }}>
          <Icon icon='tabler:edit' fontSize={20} />
        </IconButton>
        <IconButton sx={{ color: 'primary.main' }}>
          <Icon icon='tabler:trash' fontSize={20} />
        </IconButton>
      </Stack>
    </>
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

      return <RowAction id={id} />
    }
  }
]

const rows = [
  { id: 1, dni: 76564395, nombre: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 949992147 },
  { id: 1, dni: 76564395, nombre: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 949992147 },
  { id: 1, dni: 76564395, nombre: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 949992147 },
  { id: 1, dni: 76564395, nombre: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 949992147 },
  { id: 1, dni: 76564395, nombre: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 949992147 },
  { id: 1, dni: 76564395, nombre: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 949992147 }
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
