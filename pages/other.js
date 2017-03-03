import React from 'react'
import { initStore, startClock } from '~/store'
import withRedux from 'next-redux-wrapper'
import RouteLinks from '~/app/components/RouteLinks'
import Test from '~/app/widgets/Test'


let a = [{
  href: '/other',
  title: 'Other'
},
{
  href: '/',
  title: 'Home'
},
{
    href: '/widgets',
    title: 'Widgets'
}];

class Other extends React.Component {
  static getInitialProps({ store, isServer }) {
  }


  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <RouteLinks title='Other Page' linkTo={a} />
        <Test/>
      </div>
    )
  }
}

export default withRedux(initStore)(Other)
