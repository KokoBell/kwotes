import style from '../styles/QuoteBox.module.css'

export default function QuoteBox({ quote, handleNewQuote }) {
    return (
        <div className={style.quoteBox}>
            <p className={style.text}>{quote.text}</p>

            <h2 className={style.author}>{quote.author}</h2>

            <div className={style.actions}>

                <button id="new-quote" className={style.quoteButton} onClick={handleNewQuote}>
                    New Quote
                </button>

                <a href="https://twitter.com/intent/tweet"
                    target="_blank"
                    className={style.tweetLink}
                    rel="noreferrer"
                    >Tweet</a>
            </div>
        </div>
    );
}