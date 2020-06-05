import React from 'react'
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
export default ({ data }) => {
  const {
    frontmatter: { title },
    excerpt,
  } = data.allMarkdownRemark.edges[0].node
  return (
    <>
      <Title>{title}</Title>
      <Content>{excerpt}</Content>
    </>
  )
}

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
