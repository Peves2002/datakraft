// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const TablaEncabezado = ({ modulo, path }: { modulo: string; path: string }) => {
  return (
    <Box
      sx={{
        py: 4,
        rowGap: 2,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Button color='secondary' variant='tonal' startIcon={<Icon icon='tabler:upload' />}>
        Exportar
      </Button>
      <Box sx={{ rowGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <CustomTextField sx={{ mr: 4 }} placeholder={`Buscar ${modulo}`} />
        <Button variant='contained' sx={{ '& svg': { mr: 2 } }} component={Link} href={path}>
          <Icon fontSize='1.125rem' icon='tabler:plus' />
          {`Añadir ${modulo}`}
        </Button>
      </Box>
    </Box>
  )
}

export default TablaEncabezado
