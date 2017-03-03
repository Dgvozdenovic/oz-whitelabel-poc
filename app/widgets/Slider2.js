import React from 'react'


export default class Slider2 extends React.Component {

  render () {
      let items;
      if (this.props.data) {
          items = this.props.data.map((color, index) =>
              <div key={index} style={{
                  width: '20px',
                  height: '50px',
                  display: 'inline-block',
                  border: '1px solid silver',
                  margin: '5px',
                  verticalAlign: 'middle',
                  backgroundColor: color
              }}>
              </div>
            );
      }
    return (
      <div style={{border: '1px solid gray', margin: '30px'}}>
        <div style={{display: "inline-block"}}>
            <h4>{this.props.title}</h4>
        </div>
        {items}
      </div>
    )
  }
}
