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
              'M20 7.238l-7.928 7.1L4 7.216V19h7.07a6.95 6.95 0 0 0 .604 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.255a6.972 6.972 0 0 0-2-.965V7.238zM19.501 5H4.511l7.55 6.662L19.502 5zm-2.794 15.708a3 3 0 0 0 4.001-4.001l-4.001 4zm-1.415-1.415l4.001-4a3 3 0 0 0-4.001 4.001zM18 23a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'MailForbidLine')
