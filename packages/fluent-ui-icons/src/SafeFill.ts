import createIcon, { JSX } from './utils/createIcon'

export const jsx: JSX = {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24'
  },
  children: [
    {
      type: 'g',
      props: null,
      children: [
        {
          type: 'path',
          props: {
            fill: 'none',
            d: 'M0 0h24v24H0z'
          },
          children: []
        },
        {
          type: 'path',
          props: {
            d:
              'M18 20H6v2H4v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1v2h-2v-2zm-7-6.126V17h2v-3.126A4.002 4.002 0 0 0 12 6a4 4 0 0 0-1 7.874zM12 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'SafeFill')
