import React from "react";
import {Faixa, Coluna} from "./styled";
import Button from "../Button";

function index(props) {
  return (
    <>
        <Faixa>
            <Coluna>
                <p>Selecionados</p>
                {props.selecionados} games
            </Coluna>
            <Button root="/champion" text="Gerar Meu Campeonato"/>
        </Faixa>
    </>
  );
}

export default index;
