import React from 'react'
import { initStore, startClock } from '~/store'
import withRedux from 'next-redux-wrapper'
import RouteLinks from '~/app/components/RouteLinks'
import WLHeader from '~/app/components/Head'
import ClockWrap from '~/app/components/ClockWrap'

let a = [{
  href: '/other',
  title: 'Other'
},
{
  href: '/',
  title: 'Home'
}];

class Counter extends React.Component {
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
        <WLHeader title='BP TEMPLATE - Other' />
        <ClockWrap/>
        <RouteLinks title='BP Other Page' linkTo={a} />
      </div>
    )
  }
}

export default withRedux(initStore)(Counter)