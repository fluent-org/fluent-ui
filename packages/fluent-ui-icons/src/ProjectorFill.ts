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
              'M11.112 12a4.502 4.502 0 0 0 8.776 0H22v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h9.112zM5 16h2v2H5v-2zm10.5-2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM11.112 10H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6h-2.112a4.502 4.502 0 0 0-8.776 0z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'ProjectorFill')
