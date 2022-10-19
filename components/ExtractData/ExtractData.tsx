import React from "react";
import styled from "@emotion/styled";

import TypeDb from "../../types/TypeDb";

type ExtractDataProps = {
  db: Array<TypeDb> // db é um array de objetos que contém dados do tipo TypeDb
}

const ExtractDataContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;

    p {
      display: flex;
    }
  }

`

export default function ExtractData(props: ExtractDataProps) {
  return (
    <ExtractDataContainer>Dados do Array
      {props.db.map((item, index) => {
        return (
          <div key={item.id}>
            <p>{item.date}</p>
            <p>{item.description}</p>
            <p>{item.amount}</p>
            <p>{item.type}</p>
          </div>
        );
      })}
    </ExtractDataContainer>
  )
}
