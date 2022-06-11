import { useState } from 'react'
import styles from '../styles/Index.module.css'
import QuoteBox from '../components/quotebox'

export default function Home() {
  const [quote, setQuote] = useState({"text": "Press the button to get a quote...", "author":""})
  
  const handleNewQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuote(data[randomNum])
      })
  }

  return (
    <div className={styles.main}>
    <QuoteBox quote = {quote}
      handleNewQuote = {handleNewQuote}/>
    </div>)
}
