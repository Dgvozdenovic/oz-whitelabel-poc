import React from 'react'


export default class WidgetX extends React.Component {

  render () {
      let items;
      if (this.props.data) {
          items = this.props.data.map((text, index) =>
              <li key={index}>{text}</li>
            );
      }

    return (
      <div style={{border: '1px solid gray', margin: '30px', padding: "20px"}}>
        <h3>{this.props.title}</h3>
        {items}
      </div>
    )
  }
}
