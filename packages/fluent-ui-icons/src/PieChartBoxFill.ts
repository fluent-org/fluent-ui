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
              'M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.9 10H11V7.1a5.002 5.002 0 0 0 1 9.9 5.002 5.002 0 0 0 4.9-4zm0-2A5.006 5.006 0 0 0 13 7.1V11h3.9z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'PieChartBoxFill')
