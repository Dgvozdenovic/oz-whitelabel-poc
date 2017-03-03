import Link from 'next/link'
import { connect } from 'react-redux'

export default connect(state => state)(({ title, linkTo}) => {

  var indents = [];
  for (var i = 0; i < linkTo.length; i++) {
    indents.push(<Link key={i} href={linkTo[i].href}><a>{linkTo[i].title}<br/></a></Link>);
  }

  return (
    <div>
      <h1>{title}</h1>
      <nav>
       {indents}
      </nav>
    </div>
  )
})
