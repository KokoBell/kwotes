import styles from '../styles/QuoteBox.module.css'

export default function QuoteBox({ quote, handleNewQuote }) {
    return (
        <div className={styles.quoteBox}>
            <p className={styles.text}>{quote.text}</p>

            <h2 className={styles.author}>{quote.author}</h2>

            <div className={styles.actions}>

                <button id="new-quote" className={styles.quoteButton} onClick={handleNewQuote}>
                    New Quote
                </button>

                <a href="https://twitter.com/intent/tweet"
                    id="tweet-quote"
                    target="_blank"
                    className={styles.tweetLink}>Tweet</a>
            </div>
        </div>
    );
}