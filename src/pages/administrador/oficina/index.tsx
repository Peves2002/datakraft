// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Divider } from '@mui/material'
import TablaLista from 'src/views/administrador/oficina/lista/TablaLista'
import TablaEncabezado from 'src/views/administrador/oficina/lista/TablaEncabezado'

const Home = () => {
  return (
    <Card>
      <CardHeader title='Lista de Oficina' />
      <CardContent>
        <TablaEncabezado />
        <Divider sx={{ m: '0 !important' }} />
        <TablaLista />
      </CardContent>
    </Card>
  )
}

export default Home
