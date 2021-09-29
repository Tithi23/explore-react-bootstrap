import logo from './logo.svg';
import './App.css';
import { ButtonGroup, Button, Spinner, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import News from './component/News/News';

// const c = []
// const number = c.length === 0 ? 5 : 10;

function App() {
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-29&sortBy=publishedAt&apiKey=b163c2cd2b034f4e832ab3e191d55052')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <div className="App">
      {/* {news.length === 0 ? <span>Loading</span> : <span>Done</span>} */}
      {news.length === 0 ?
        <Spinner animation="border" />
        :
        <Row xs={1} md={3} className="g-4">
          {
            news.map(nw => <News news={nw}></News>)
          }
        </Row>
      }
    </div>
  );
}

export default App;
