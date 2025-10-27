import { useState } from 'react'
import styles from './TextInput.module.css'


export default function TextInput({ placeholder, maxLength, ...props }) {
  const [text, setText] = useState('')

  const [tweetList, setTweetList] = useState([])

  const onTextChange = (event) => {
    setText(event.target.value)
  }

  function sendTweet() {
    setTweetList([text, ...tweetList])
    setText('')
  }

  return (
    <div>
        <textarea className={styles.input} placeholder={placeholder} maxLength={maxLength} value={text} onChange={onTextChange} {...props} />
        <p>{text.length} / {maxLength}</p>
        <button onClick={sendTweet}>Enviar Tweet</button>
        {tweetList.map((tweet, index) => (
          <p key={index}>{tweet}</p>
        ))}
    </div>
  )
}
