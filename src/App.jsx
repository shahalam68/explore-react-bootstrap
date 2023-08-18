import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import News from './assets/components/News/News'

function App() {
const [news, setNews] = useState([]);
  useEffect( () => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-07-18&sortBy=publishedAt&apiKey=e0de978d7a7941b4ac4333373325d010')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[])
  return(
    <div className='App'>

      

        {
          news.length === 0 ? 
          <Spinner animation="border" variant="primary" />
          :
          <Row xs={1} md={3} className="g-4">
          {
            news.map(nw => <News news={nw}></News>)
          }
      </Row>
      }
    </div>
  )
}

export default App
