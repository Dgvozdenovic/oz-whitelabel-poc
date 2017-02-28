import { connect } from 'react-redux'
import Clock from './Clock'

export default connect(state => state)(({ lastUpdate, light }) => {
  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />      
    </div>
  )
})
