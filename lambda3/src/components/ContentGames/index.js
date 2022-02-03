import React from "react";
import BoxGrid from "../BoxGrid";
import {Box,ContentDiv} from "./styled";

function index(props) {
  const data = props.data
  const anos = data.map((list)=> list.ano);
  var arr = [anos]
  var max = Math.max(...arr[0]);
  var min = Math.min(...arr[0]);
  data.sort(function(x,y){
    return x.ano - y.ano;
  })

  return (
    <ContentDiv>
        <span>{min} - {max}</span>
        <Box>
            {data.map((list) => <BoxGrid titlegame={list.titulo} id={list.id} ano={list.ano} nota={list.nota} setCount={props.setCount} count={props.count}/>)}
        </Box>
    </ContentDiv>
  );
}

export default index;
