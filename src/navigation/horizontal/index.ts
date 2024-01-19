// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => [
  {
    title: 'Administrador',
    icon: 'heroicons:user-16-solid',
    children: [
      {
        title: 'Alumno',
        path: '/administrador/alumno'
      },
      {
        title: 'Tramite',
        path: '/administrador/tramite'
      },
      {
        title: 'Oficina',
        path: '/administrador/oficina'
      },
      {
        title: 'Personal',
        path: '/administrador/personal'
      },
      {
        title: 'Reglamento',
        path: '/administrador/reglamento'
      }
    ]
  },
  {
    title: 'Cargar Nominas OCE',
    path: '',
    icon: 'mdi:file-send'
  },
  {
    title: 'Horario',
    path: '',
    icon: 'uis:schedule'
  },
  {
    title: 'Bloqueo',
    icon: 'uis:padlock',
    children: [
      {
        title: 'Bloqueo',
        path: ''
      }
    ]
  },
  {
    title: 'Cargar Preinscripciones',
    path: '',
    icon: 'ic:sharp-app-registration'
  },
  {
    title: 'Algoritmo',
    icon: 'mingcute:settings-2-line',
    children: [
      {
        title: 'Algoritmo',
        path: ''
      }
    ]
  }
]

export default navigation
