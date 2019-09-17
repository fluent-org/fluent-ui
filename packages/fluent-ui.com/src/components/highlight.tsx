import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import HighlightBase, { defaultProps } from 'prism-react-renderer'
import { theme } from '../utils/theme'

interface HighlightProps {
  children: string
}

const useStyles = createUseStyles({
  root: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch'
  }
})

const Highlight: React.FC<HighlightProps> = ({ children }: HighlightProps): React.ReactElement => {
  // @ts-ignore
  const code = children.props.children

  const classes = useStyles()

  return (
    <HighlightBase {...defaultProps} code={code} language="jsx" theme={theme}>
      {({
        className: classNameProp,
        style,
        tokens,
        getLineProps,
        getTokenProps
      }): React.ReactElement => {
        const className = classNames(classes.root, classNameProp)
        return (
          <pre className={className} style={style}>
            {tokens.map(
              (line, i): React.ReactElement => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map(
                    (token, key): React.ReactElement => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    )
                  )}
                </div>
              )
            )}
          </pre>
        )
      }}
    </HighlightBase>
  )
}

export default Highlight
