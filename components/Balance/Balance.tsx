import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const BalanceContainer = styled.div`
  background-color: #242424;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100px;
  padding-left: 20px;

  font-family: sans-serif;
  color: #f8f8f8;

  strong {
    font-size: 25px;
  }
`

export default function Balance() {
  return (
    <BalanceContainer>
      <div>Balance</div>
      <div>
        <span>R$ </span>
        <strong>190.000,00 </strong>
        <Link href="#">
          <a>Mostrar</a>
        </Link>
      </div>
    </BalanceContainer>
  )
}
