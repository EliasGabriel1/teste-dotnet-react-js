import React from "react";
import Header from "../../components/Header";
import BoxResult from "../../components/BoxResultado";
import GroupResult from "./styled"
import { loadLists } from '../../exampleapi/api';

const data = loadLists();

function index() {
  return (
    <>
        <Header title="CAMPEONATO DE GAMES" fase="Resultado Final" hr="" description="Veja o resultado final do campeonato de game de forma simples e rápida"/>
        <GroupResult>
          <BoxResult colocacao="1º" game={data[0].vencedoresL2[0].games[0].titulo} id={data[0].vencedoresL2[0].games[0].id} ano={data[0].vencedoresL2[0].games[0].ano}/>
          <BoxResult colocacao="2º" game={data[0].vencedoresL2[0].games[1].titulo} id={data[0].vencedoresL2[0].games[1].id} ano={data[0].vencedoresL2[0].games[1].ano}/>
        </GroupResult>
    </>
  );
}

export default index;
