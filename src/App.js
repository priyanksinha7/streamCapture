import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Canvas from './components/canvas/canvas';
import MyComments from './components/Comments/comments';
import MyNavbar from './components/Navbar/navbar';
import Player from './components/player/player';


function App() {
  return (
     <div  id="cnt">
       <Container>
         <MyNavbar/>
         </Container>
         <Container id="grid">
          <Row>
              <Col>
                <Player />
              </Col>
              <Col>
              <Canvas />
              </Col>
          </Row>     
              </Container>
            
                <MyComments/>

     </div>
  );
}

export default App;
