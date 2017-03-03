import React from 'react'
import { initStore, startClock } from '~/store'
import withRedux from 'next-redux-wrapper'
import RouteLinks from '~/app/components/RouteLinks'
import Slider1 from '~/app/widgets/Slider1'
import Slider2 from '~/app/widgets/Slider2'
import WidgetX from '~/app/widgets/WidgetX'

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

var configWidgets = [
    {
        type: "slider2",
        data: ['blue', 'yellow', 'blue', 'red', 'red'],
        title: "Recently Added"
    },
    {
        type: "slider1",
        data: ['yellow', 'yellow', 'red', 'red', 'yellow', 'red'],
        title: "Wild Tales"
    },
    {
        type: "slider1",
        data: ['green', 'red', 'yellow', 'red', 'green'],
        title: "Global Point of View"
    },
    {
        type: "widgetx",
        data: ["A LOOK BACK", "TO THE WONDER", "THE LOST CITY", "THE BACK NINE"],
        title: "Movies That Move You"
    },
    {
        type: "slider2",
        data: ['blue', 'red', 'blue', 'red', 'blue'],
        title: "Inspirational"
    }
];

class Test extends React.Component {

    render() {
        const widgets = configWidgets.map((widget, index) => {
            switch(widget.type) {
                case 'slider1':
                    return <Slider1 data={widget.data} title={widget.title} key={index}/>;
                    break;
                case 'slider2':
                    return <Slider2 data={widget.data} title={widget.title} key={index}/>;
                    break;
                case 'widgetx':
                    return <WidgetX data={widget.data} title={widget.title} key={index}/>;
                    break;
                default:
                    return null;
                }
        });
    return (
      <div>
        <RouteLinks title='Widgets' linkTo={a} />
        {widgets}
      </div>
    )
  }
}

export default withRedux(initStore)(Test)
