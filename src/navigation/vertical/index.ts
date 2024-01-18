// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
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
          path: '/administrador/invoice/reglamento'
        }
      ]
    },
    {
      title: 'Cargar Nominas OCE',
      path: '/home',
      icon: 'mdi:file-send'
    },
    {
      title: 'Horario',
      path: '/second-page',
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
      path: '/second-page',
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
}

export default navigation
