import React from 'react'


export default class Slider1 extends React.Component {

  render () {
      let items;
      if (this.props.data) {
          items = this.props.data.map(color =>
              <div style={{width: '20px', height: '20px', display: 'inline-block', border: '1px solid silver', margin: '5px', backgroundColor: color}}>
              </div>
            );
      }

    return (
      <div style={{border: '1px solid gray', margin: '30px'}}>
        <h3>{this.props.title}</h3>
        <br />
        {items}
      </div>
    )
  }
}
