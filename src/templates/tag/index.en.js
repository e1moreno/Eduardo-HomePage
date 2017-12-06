import React from 'react'
import PropTypes from 'prop-types'
import TagPage from '../../components/TagPage/TagPage'

export default function Tag ({data}) {
  return (
    <TagPage data={data.contentfulTag}/>
  )
}
Tag.propTypes = {
  data: PropTypes.shape({
    contentfulTag: PropTypes.object.isRequired,
  }).isRequired,
}

export const query = graphql`
  query TagEnQuery($slug: String!, $node_locale: String = "en-US") {
    contentfulTag(slug: {eq: $slug}, node_locale: {eq: $node_locale}) {
      slug
      display
      posts {
        id
        slug
        title
        category
        createdAt
        summary
        author
      }
    }
  }
`
