// Libs
import React from 'react';

// Styles
import * as S from './Header.styles';

export default function Header() {
  return (
    <S.Container>
      <h1>Escola Mais - Vinicius Bortoletto</h1>

      <nav>
        <ul>
          <li>
            <a href="https://github.com/vinibortoletto">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vinicius-bortoletto/">LinkedIn</a>
          </li>
          <li>
            <a href="vinibortoletto.netlify.app/">Portfolio</a>
          </li>
        </ul>
      </nav>
    </S.Container>
  );
}
