import React, { FC } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

const Title = styled.h1`
  font-size: 1.5em;
  margin: 0;
  padding: 0.5em 0;
  color: palevioletred;
  background: papayawhip;
`

const Content = styled.div`
  margin-top: 0.5em;
`

interface PageQuery {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          frontmatter: {
            title: string
          }
          excerpt: string
        }
      }>
    }
  }
}

const Home: FC<PageQuery> = ({ data }) => {
  const node = data.allMarkdownRemark.edges[0].node

  const title = node.frontmatter?.title
  const excerpt = node.excerpt

  return (
    <>
      <Title>{title}</Title>
      <Content>{excerpt}</Content>
    </>
  )
}

export default Home

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`
