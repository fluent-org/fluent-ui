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
              'M20 11h-1V7h1V4h2v3h1v4h-1v7a3 3 0 0 1-6 0v-4h-2v5h1v2H2v-2h1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 0 0 2 0v-7zM9 11V7l-4 6h3v4l4-6H9z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'ChargingPile2Fill')
