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
              'M5.678 18.123C3.092 16.566 1.5 14.112 1.5 11.405 1.5 6.701 6.248 3 12 3s10.5 3.701 10.5 8.405c0 4.704-4.748 8.405-10.5 8.405-.442 0-.882-.022-1.318-.065l-3.765 2.458c-.615.326-.957.425-1.485.066-.62-.424-.596-.892-.381-1.56l.627-2.586zM3.5 11.405c0 2.132 1.418 4.123 3.781 5.32l.706.359-.186.77-.401 1.648 2.8-1.83.366.046c.473.061.952.092 1.434.092 4.741 0 8.5-2.93 8.5-6.405S16.741 5 12 5s-8.5 2.93-8.5 6.405zm14.407-.346l1.514 2.155a.472.472 0 1 1-.773.543l-1.428-2.033-.427.413V13.5a.472.472 0 0 1-.944 0v-1.439a.471.471 0 0 1 0-.222V9.282a.472.472 0 0 1 .944 0v1.542l1.928-1.866a.472.472 0 0 1 .656.678l-1.47 1.423zm-2.958 1.925a.472.472 0 0 1 0 .944h-1.932a.472.472 0 0 1-.471-.472V9.297a.472.472 0 1 1 .943 0v3.687h1.46zm-5.857-1.092h1.334l-.638-1.707-.696 1.707zm2.523.488l.345.925a.472.472 0 1 1-.884.33l-.298-.799h-2.07l-.331.813a.472.472 0 1 1-.874-.357l1.66-4.075a.696.696 0 0 1 .654-.447.69.69 0 0 1 .627.474l1.046 2.8a.469.469 0 0 1 .127.32l-.002.016zM8.293 9.302c0 .26-.21.472-.471.472h-1.14v3.736a.472.472 0 0 1-.945 0V9.774h-1.16a.472.472 0 1 1 0-.944h3.245c.26 0 .471.211.471.472z',
            fillRule: 'nonzero'
          },
          children: []
        }
      ]
    }
  ]
}

export default createIcon(jsx, 'KakaoTalkLine')
