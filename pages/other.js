import React from 'react'
import { initStore, startClock } from '~/store'
import withRedux from 'next-redux-wrapper'
import RouteLinks from '~/app/components/RouteLinks'
import Test from '~/app/widgets/Test'
import Logo from '~/app/components/Logo'


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
    //   var test = appConfig;
    // {test.envi}
    return (
      <div>
        <Logo />
        <RouteLinks title='Other Page' linkTo={a} />
        <Test/>
      </div>
    )
  }
}

export default withRedux(initStore)(Other)
