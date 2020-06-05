/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomeQuery
// ====================================================

export interface HomeQuery_allMarkdownRemark_edges_node_frontmatter {
  title: string | null;
}

export interface HomeQuery_allMarkdownRemark_edges_node {
  frontmatter: HomeQuery_allMarkdownRemark_edges_node_frontmatter | null;
  excerpt: string | null;
}

export interface HomeQuery_allMarkdownRemark_edges {
  node: HomeQuery_allMarkdownRemark_edges_node;
}

export interface HomeQuery_allMarkdownRemark {
  edges: HomeQuery_allMarkdownRemark_edges[];
}

export interface HomeQuery {
  allMarkdownRemark: HomeQuery_allMarkdownRemark;
}
