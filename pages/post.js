import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { apiUrl } from '../constants/api'

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const postId = query.id
    const getPostResults = await fetch(`${apiUrl}/posts/${postId}`)
    const post = await getPostResults.json()

    return { post }
  }

  render() {
    const { post } = this.props

    return (
      <>
        <div>Title: {post.title}</div>

        <div>Content: {post.body}</div>

        <Link
          href={{ pathname: '/post', query: { id: post.id + 1 } }}
          as={`/post/${post.id + 1}`}
        >
          <a>Next post</a>
        </Link>
      </>
    )
  }
}