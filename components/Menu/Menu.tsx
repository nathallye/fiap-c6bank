import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const MenuConteiner = styled.nav`
  background-color: #242424;
  
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */

  font-family: sans-serif;  
  ul {
    margin: 0;
    padding: 0; 
  }
`

const Li = styled.li`
    display: flex;

    padding-left: 5%;

    list-style: none;
    line-height: 50px;
    border-left: 4px solid transparent;

    &:hover {
      background-color: #616161;

      border-left: 4px solid #ffef0d;
      cursor: pointer;
    }

    a {
      color: #f8f8f8;
    }
`

export default function Menu() {
  return (
    <MenuConteiner>
      <ul>
        <Li>
          <Link href="#">
            <a>Início</a>
          </Link>
        </Li>
        <Li>
          <Link href="#">
            <a>Extrato</a>
          </Link>
        </Li>
        <Li>
          <Link href="#">
            <a>Transferências</a>
          </Link>
        </Li>
        <Li>
          <Link href="#">
            <a>Pagamentos</a>
          </Link>
        </Li>
        <Li>
          <Link href="#">
            <a>Cartões</a>
          </Link>
        </Li>
        <Li>
          <Link href="#">
            <a>Crédito</a>
          </Link>
        </Li>
      </ul>
    </MenuConteiner>
  )
}
