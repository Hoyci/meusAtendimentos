import { Link, useLocation } from 'react-router-dom';
import { LinkStyled } from '../Link';
import { Background, BoxContainer, BoxFooter, BoxHeader } from './styles';

type BoxType = {
  children: React.ReactNode;
};

export default function Box({ children }: BoxType) {
  const { pathname } = useLocation();
  return (
    <Background>
      <BoxContainer>
        <BoxHeader>
          <h2>Meus Atendimentos</h2>
        </BoxHeader>
        {children}
        <BoxFooter>
          <LinkStyled to={pathname === '/' ? '/signUp' : '/'}>
            {pathname === '/' ? 'Ainda não se cadastrou?' : 'Já possuo conta'}
          </LinkStyled>
        </BoxFooter>
      </BoxContainer>
    </Background>
  );
}
