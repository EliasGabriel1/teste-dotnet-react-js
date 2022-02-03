import React from "react";
import {Box, Checkbox} from "./styled";

function index(props) {
  return (
        <Box for={props.id}>
            <Checkbox>
                <input type="checkbox"
                onChange={(e) => {e.target.checked?props.setCount([parseInt(props.count)+parseInt(1)]):props.setCount([parseInt(props.count)-parseInt(1)])}} id={props.id} name={props.id}/>
                <span >{props.titlegame}</span>
            </Checkbox>
            <p>{props.ano}</p>
            <p>{props.nota}</p>
      </Box>
  );
}

export default index;
