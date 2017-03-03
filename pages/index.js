import React from 'react'
import { initStore, startClock, getConfig } from '~/store'
import withRedux from 'next-redux-wrapper'
import RouteLinks from '~/app/components/RouteLinks'
import WLHeader from '~/app/components/Head'
import ClockWrap from '~/app/components/ClockWrap'
import Button from '~/app/elements/Button/button.js'
import { setInstance, loadConfig } from '~/app/helpers/configHelper'


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

class BP extends React.Component {
  static getInitialProps({ store, isServer }) {
    //store.dispatch({ type: 'GET_CONFIG', config: {color: 'blue'} })
    store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() })
    return { isServer }
  }

  componentWillMount () {
     // loadConfig();
  }

  componentDidMount() {
    this.timer = this.props.dispatch(startClock())
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  onClick(instance) {
      setInstance(instance);
  }

  render() {
    return (
      <div>
        <WLHeader title='Home' />
        <ClockWrap/>
        <br/>
        {/*<Button
            className = "btn"
            btnText = "Instance 1"
            onClick={this.onClick.bind(this, 1)}
        />
        <Button
            className = "btn"
            btnText = "Instance 2"
            onClick={this.onClick.bind(this, 2)}
        />*/}
        <RouteLinks title='Home Page' linkTo={a} />
      </div>
    )
  }
}

export default withRedux(initStore)(BP)
