import React, { useState } from "react";
import Header from "../../components/Header";
import Faixa from "../../components/Faixa";
import ContentGames from "../../components/ContentGames";
import Space from "./styled";
import { loadLists } from '../../services/api';

const data = loadLists();
function Index() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Header title="Challenge Games" fase="Fase de Seleção" hr="1" description="Selecione 8 games que você deseja que entrem na competição e depois precione o
        botão Gerar Meu Campeonato para prosseguir."/>
        <Faixa selecionados={count}/>
        <ContentGames data={data} setCount={setCount} count={count}/>
        <Space/>
    </>
  );
}

export default Index;
