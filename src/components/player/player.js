
import { Col,Row,Button} from 'react-bootstrap';
import './player.css'

function Player()
{
    const url="https://www.youtube.com/embed/668nUCeBHyY"
    return(
        <div id="myCard">
     <u>  <h2>
            PLAYER
        </h2></u> 
        <iframe width="520" height="375" title="myFrame"  id="myframe" src={url}>
        </iframe>
        <Row>
        <Col>
       <Button variant="secondary">
        Start
       </Button>
       </Col>
       <Col>
       <Button variant="secondary">
        Stop
       </Button>
       </Col>
       <Col>
       <Button variant="secondary">
        Download
       </Button>
       </Col>
       </Row>
        </div>
    )
}

export default Player;