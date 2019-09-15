import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import { styles } from './Transition.styled'
import { TransitionClassProps, TransitionProps, TransitionPropTypes } from './Transition.type'
import { createUseStyles } from '@fluent-ui/styles'
import classNames from 'classnames'

export const name = 'Transition'

const useStyles = createUseStyles<TransitionClassProps>(styles, { name })

const Transition: React.FC<TransitionProps> = React.forwardRef<HTMLDivElement, TransitionProps>(
  (props, ref): React.ReactElement => {
    const {
      type = 'fade',
      wrapper = true,
      appear = true,
      timeout = 250,
      visible,
      children,
      ...rest
    } = props

    const [wrapperHeight, setWrapperHeight] = React.useState(0)
    const wrapperRef = React.useRef<HTMLDivElement>(null)
    React.useEffect((): void => {
      if (wrapperRef && wrapperRef.current && wrapperRef.current.clientHeight) {
        setWrapperHeight(wrapperRef.current.clientHeight)
      }
    }, [])
    const classes = useStyles({
      wrapperHeight,
      ...props
    })
    const className = classNames(classes.root, {
      [classes.fade]: type === 'fade',
      [classes.zoom]: type === 'zoom',
      [classes.slide]: type === 'slide',
      [classes.collapse]: type === 'collapse',
      [classes.grow]: type === 'grow'
    })
    return (
      <CSSTransition in={visible} appear={appear} timeout={timeout} classNames={type} {...rest}>
        {wrapper ? (
          <div className={className} {...props} ref={ref}>
            <div ref={wrapperRef}>{children}</div>
          </div>
        ) : (
          React.cloneElement(children, {
            ...props,
            // @ts-ignore
            className: [children.props.className, className]
          })
        )}
      </CSSTransition>
    )
  }
)

Transition.displayName = `F${name}`

Transition.propTypes = TransitionPropTypes

Transition.defaultProps = {
  type: 'fade',
  wrapper: true,
  appear: true,
  timeout: 250
}

export default Transition
