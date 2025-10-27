import { useState } from 'react'
import styles from './TextInput.module.css'


export default function TextInput({ placeholder, maxLength, ...props }) {
  const [text, setText] = useState('')

  const onTextChange = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
        <textarea className={styles.input} placeholder={placeholder} maxLength={maxLength} value={text} onChange={onTextChange} {...props} />
        <p>{text.length} / {maxLength}</p>
    </div>
  )
}
