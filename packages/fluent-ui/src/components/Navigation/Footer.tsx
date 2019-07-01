import * as React from 'react'
import { ReactElement, ReactNode } from 'react'
import Box from '../Box'

interface ItemProps {
  children: ReactNode
}

const Footer = ({ children }: ItemProps): ReactElement => <Box>{children}</Box>

export default Footer
