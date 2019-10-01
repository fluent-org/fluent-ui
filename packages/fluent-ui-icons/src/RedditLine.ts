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
              'M11.102 7.815l.751-3.536a2 2 0 0 1 2.373-1.54l3.196.68a2 2 0 1 1-.416 1.956l-3.196-.68-.666 3.135c1.784.137 3.557.73 5.163 1.7a3.192 3.192 0 0 1 4.741 2.673v.021a3.192 3.192 0 0 1-1.207 2.55 2.855 2.855 0 0 1-.008.123c0 3.998-4.45 7.03-9.799 7.03-5.332 0-9.708-3.024-9.705-6.953a5.31 5.31 0 0 1-.01-.181 3.192 3.192 0 0 1 3.454-5.35 11.446 11.446 0 0 1 5.329-1.628zm9.286 5.526c.408-.203.664-.62.661-1.075a1.192 1.192 0 0 0-2.016-.806l-.585.56-.67-.455c-1.615-1.098-3.452-1.725-5.23-1.764h-1.006c-1.875.029-3.651.6-5.237 1.675l-.663.45-.584-.55a1.192 1.192 0 1 0-1.314 1.952l.633.29-.054.695c-.013.17-.013.339.003.584 0 2.71 3.356 5.03 7.708 5.03 4.371 0 7.799-2.336 7.802-5.106a3.31 3.31 0 0 0 0-.508l-.052-.672.604-.3zM7 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm7 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm-1.984 5.103c-1.397 0-2.767-.37-3.882-1.21a.424.424 0 0 1 .597-.597c.945.693 2.123.99 3.269.99s2.33-.275 3.284-.959a.439.439 0 0 1 .732.206.469.469 0 0 1-.119.423c-.684.797-2.484 1.147-3.881 1.147z',
            fillRule: 'nonzero'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'RedditLine')
