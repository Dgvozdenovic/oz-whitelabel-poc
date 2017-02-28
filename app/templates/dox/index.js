// ./pages/index.js
import React from 'react'
import Head from 'next/head'
import WLHeader from '~/app/components/Head'
import Counter from '~/app/components/Counter'

export default () => (
  <div>
    <WLHeader title='DOX TEMPLATE'/>
    <h1>Index DOX</h1>
    <Counter />
  </div>
)