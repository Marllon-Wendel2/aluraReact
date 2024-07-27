
import Pesquisa from '../componentes/Pesquisa'
import styled from 'styled-components'
import FeedComentarios from '../componentes/Feed'

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
    @media (max-width: 724px) {
      width: 123%;
      margin: 0;
    }
`
const Inicio = styled.div`
  display: flex;
`
function Home() {
  return (
    <AppContainer>
      <Inicio>
      <Pesquisa />
      </Inicio>
      <FeedComentarios />
    </AppContainer>
  );
}

export default Home;
