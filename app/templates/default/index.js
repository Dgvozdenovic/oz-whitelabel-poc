import React from 'react'
import { initStore, startClock } from '~/store'
import withRedux from 'next-redux-wrapper'
import RouteLinks from '~/app/components/RouteLinks'
import WLHeader from '~/app/components/Head'
import ClockWrap from '~/app/components/ClockWrap'
import Counter from '~/app/components/Counter'

let a = [{
  href: '/that',
  title: 'that'
},
{
  href: '/',
  title: 'Home'
}];

class Home extends React.Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() })
    return { isServer }
  }

  componentDidMount() {
    this.timer = this.props.dispatch(startClock())
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <WLHeader title='Default TEMPLATE - Home' />
        <ClockWrap/>
        <RouteLinks title='Default Home Page' linkTo={a} />
      </div>
    )
  }
}

export default withRedux(initStore)(Home)
