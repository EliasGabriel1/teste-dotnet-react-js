import React from "react";
import Buttonchild from "./styled";

function index(props) {
  return (
    <Buttonchild>
        <a href={props.root}>{props.text}</a>
    </Buttonchild>
  );
}

export default index;
