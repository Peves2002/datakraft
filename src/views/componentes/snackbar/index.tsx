import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { useState } from 'react'

export default function AutohideSnackbar({ accion, modulo, open }: { accion: string; modulo: string; open: boolean }) {
  const [opens, setOpens] = useState(open)

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpens(false)
  }

  const alertAccion = () => {
    switch (accion) {
      case 'Añadir':
        return <Alert severity='success'>Se ha añadido un nuevo {modulo}.</Alert>
        break
      case 'Editar':
        return <Alert severity='warning'>Se ha editado los datos del {modulo}.</Alert>
        break
      case 'Eliminar':
        return <Alert severity='error'>Se ha eliminado el {modulo}.</Alert>
        break

      default:
        return <Alert severity='success'>Dato Incorrecto</Alert>
        break
    }
  }

  return (
    <div>
      <Snackbar
        open={opens}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        {alertAccion()}
      </Snackbar>
    </div>
  )
}
