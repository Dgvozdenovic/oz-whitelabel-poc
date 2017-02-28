// ./pages/index.js
import React from 'react'
import Link from 'next/prefetch'
import 'isomorphic-fetch'
import WLHeader from '~/app/components/Head'
// Import the Head Component


export default class MyPage extends React.Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  render() {
    return (
      <div>
        <WLHeader title='POC'/>
        <h1>Index Default</h1>
        <p>Next.js has {this.props.stars} ⭐️</p>
        <Link href='/preact'><a>How about preact?</a></Link>
      </div>
    )
  }
}
