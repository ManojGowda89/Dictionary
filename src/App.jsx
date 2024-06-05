
import {useState} from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Loader from './Loader';
export default function App() {
  const [meaning, setMeaning] = useState([]);
  const [input, setInput] = useState("");
  const[error,seterror] = useState(false)
  const [loading, setLoading] = useState(false);

  function handleMeaning() {
       setLoading(true);
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
      .then((res) => {
        seterror(false)
        setMeaning(res.data[0].meanings[0].definitions)
        
        setLoading(false)
      })
      .catch((err) => {
        if(err){
          seterror(true)
          setLoading(false)
        }
      });
  }

  if(loading){
    return <Loader/>
  }
  return (<div >
    <Container>
      <center><h1 style={{color:"white"}}>Dictionary</h1></center>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="inputText">
              <Form.Label style={{color:"white"}}>Enter the text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Get the meaning"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleMeaning}>
              Click
            </Button>
            <Button variant="secondary" onClick={() =>{ 
              setInput("")
              seterror(false)
              setLoading(true)
              setTimeout(()=>{
                setLoading(false) 
              },500)
              setMeaning([])}}>
              Clear
            </Button>
          </Form>
          <br />
          {
            error && <h3 style={{color:"red"}}> Not found</h3>
          }
          {meaning.map((x, index) => (
            <Card key={index}>
              <Card.Body>
                <Card.Title>{x.definition}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
    </div>
  );
}