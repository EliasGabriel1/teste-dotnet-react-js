import React from "react";
import {ContentResult,Quadrado,Result} from "./styled";

function index(props) {
  return (
      <ContentResult id={props.id} data-ano={props.ano}>
          <Quadrado>
              {props.colocacao}
          </Quadrado>
          <Result>
              {props.game}
          </Result>
      </ContentResult>
  );
}

export default index;
