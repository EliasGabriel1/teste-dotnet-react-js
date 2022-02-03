import React from 'react'
import ContentHeader from './styled'

function index(props) {
  
  return (
<ContentHeader>
  <div>
    <h4>{props.title}</h4>
      <h2>{props.fase}</h2>
      {props.hr?<hr/>: ""}
      <p>{props.description}
      </p>
  </div>
</ContentHeader>
  );
}

export default index;