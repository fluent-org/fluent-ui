import * as React from 'react'
import { StandardProps } from '..'

export interface DrawerProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement, 'onChange'> {
  children: React.ReactElement
  visible: boolean
  onChange?: (visible: boolean) => void
  anchor?: 'left' | 'top' | 'right' | 'bottom'
}
