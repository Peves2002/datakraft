import * as React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { AlumnoType } from 'src/types/alumno'
import { MenuItem, Typography } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface CellType {
  row: AlumnoType
}

const RowAction = ({ id }: { id: number }) => {
  return (
    <>
      <MenuItem sx={{ '& svg': { mr: 2 } }}>
        <Icon icon='tabler:eye' fontSize={20} />
        Ver
      </MenuItem>
      <MenuItem sx={{ '& svg': { mr: 2 } }}>
        <Icon icon='tabler:edit' fontSize={20} />
        Editar
      </MenuItem>
      <MenuItem sx={{ '& svg': { mr: 2 } }}>
        <Icon icon='tabler:trash' fontSize={20} />
        Eliminar
      </MenuItem>
    </>
  )
}

const columns: GridColDef[] = [
  {
    field: 'dni',
    headerName: 'N° Documento',
    flex: 0.18,
    headerAlign: 'center',
    renderCell: ({ row }: CellType) => {
      const { dni } = row

      return <Typography>{dni}</Typography>
    }
  },
  {
    field: 'nombres',
    headerName: 'Nombres',
    flex: 0.18,
    headerAlign: 'center',
    renderCell: ({ row }: CellType) => {
      const { nombre } = row

      return <Typography>{nombre}</Typography>
    }
  },
  {
    field: 'apellido_paterno',
    headerName: 'Apellido Paterno',
    flex: 0.18,
    headerAlign: 'center',
    renderCell: ({ row }: CellType) => {
      const { apellido_paterno } = row

      return <Typography>{apellido_paterno}</Typography>
    }
  },
  {
    field: 'apellido_materno',
    headerName: 'Apellido Materno',
    flex: 0.18,
    headerAlign: 'center',
    renderCell: ({ row }: CellType) => {
      const { apellido_materno } = row

      return <Typography>{apellido_materno}</Typography>
    }
  },
  {
    field: 'telefono',
    headerName: 'Teléfono',
    flex: 0.18,
    headerAlign: 'center',
    renderCell: ({ row }: CellType) => {
      const { telefono } = row

      return <Typography>{telefono}</Typography>
    }
  },
  {
    field: 'accion',
    headerName: 'Acción',
    flex: 0.1,
    headerAlign: 'center',
    renderCell: ({ row }: CellType) => {
      const { id } = row

      return <RowAction id={id} />
    }
  }
]

const rows = [
  { id: 1, nombres: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 'Peves' },
  { id: 2, nombres: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 'Peves' },
  { id: 3, nombres: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 'Peves' },
  { id: 4, nombres: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 'Peves' },
  { id: 5, nombres: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 'Peves' },
  { id: 6, nombres: 'Manuel', apellido_paterno: 'Peves', apellido_materno: 'Peves', telefono: 'Peves' }
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
