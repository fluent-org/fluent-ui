import * as React from 'react'
import Markdown from 'markdown-to-jsx'
import { Box, Typography } from '@fluent-ui/core'
import { createUseStyles } from '@fluent-ui/styles'

import Header from './header'
import SideBar from './sidebar'

import Playground from '../playground'
import Highlight from '../highlight'

import IconTemplate from '../../docs/components/Icon/template'
import ColorTemplate from '../../docs/components/Color/template'
import ColorTool from '../../docs/components/Color/ColorTool'
import ThemeTemplate from '../../docs/gettingStarted/theme/template'
import Table from '../table'

import { TemplateProps } from './template'

import { styles } from './content.styled'
import { scrollToAnchor } from '../../utils/scroll'

interface TypographyComponentProps {
  id?: string
  children: any
}

const useStyles = createUseStyles(styles)

const H1 = (props: TypographyComponentProps): React.ReactElement => {
  const classes = useStyles()
  return (
    <Typography variant="h4" as="h1" gutterTop gutterBottom {...props}>
      <a
        className={classes.titleA}
        href={`#${props.id}`}
        onClick={(e): void => {
          e.preventDefault()
          const target = document.querySelector('#contentRoot')
          scrollToAnchor(`#${props.id}`, target)
        }}
      >
        {props.children}
      </a>
    </Typography>
  )
}
const H2 = (props: TypographyComponentProps): React.ReactElement => {
  const classes = useStyles()
  return (
    <Typography variant="h5" as="h2" gutterBottom marginTop="2em" {...props}>
      <a
        className={classes.titleA}
        href={`#${props.id}`}
        onClick={(e): void => {
          e.preventDefault()
          const target = document.querySelector('#contentRoot')
          scrollToAnchor(`#${props.id}`, target)
        }}
      >
        {props.children}
      </a>
    </Typography>
  )
}
const H3 = (props: TypographyComponentProps): React.ReactElement => {
  const classes = useStyles()
  return (
    <Typography variant="h6" as="h3" gutterTop gutterBottom {...props}>
      <a
        className={classes.titleA}
        href={`#${props.id}`}
        onClick={(e): void => {
          e.preventDefault()
          const target = document.querySelector('#contentRoot')
          scrollToAnchor(`#${props.id}`, target)
        }}
      >
        {props.children}
      </a>
    </Typography>
  )
}

const Subtitle = (props: TypographyComponentProps): React.ReactElement => (
  <Typography variant="subtitle1" as="h6" gutterBottom {...props} />
)
const Body = (props: TypographyComponentProps): React.ReactElement => (
  <Typography variant="body1" as="p" gutterBottom {...props} />
)

const typographyOverrides = {
  h1: H1,
  h2: H2,
  h3: H3,
  h6: Subtitle,
  p: Body
}

const Content = ({ data }: TemplateProps): React.ReactElement => {
  const pre =
    data.doc.frontmatter.type === 'hooks' || data.doc.frontmatter.type === 'GettingStarted'
      ? Highlight
      : Playground
  return (
    <>
      <SideBar data={data} />
      <Box
        id="contentRoot"
        flex={1}
        boxShadow="2"
        position="relative"
        zIndex={2}
        style={{
          overflowX: 'hidden',
          overflowY: 'auto',
          transition: 'all 250ms cubic-bezier(0.4,0,0.2,1) 0ms'
        }}
      >
        <Header />
        <Box padding="4" minHeight="100%" backgroundColor="#fff">
          <Markdown
            // @ts-ignore
            options={{
              overrides: {
                pre,
                IconTemplate,
                ColorTemplate,
                ColorTool,
                ThemeTemplate,
                ...typographyOverrides
              }
            }}
          >
            {data.doc.rawMarkdownBody}
          </Markdown>
          {data.api && (
            <Markdown
              options={{
                // @ts-ignore
                namedCodesToUnicode: {
                  or: '|'
                },
                overrides: {
                  pre: Highlight,
                  table: Table,
                  ...typographyOverrides
                }
              }}
            >
              {data.api.rawMarkdownBody}
            </Markdown>
          )}
        </Box>
      </Box>
    </>
  )
}

export default Content
