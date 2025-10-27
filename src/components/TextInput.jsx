import styles from './TextInput.module.css'

export default function TextInput({ placeholder, maxLength, ...props }) {
  return (
    <div>
        <textarea className={styles.input} placeholder={placeholder} maxLength={maxLength} {...props} />
    </div>
  )
}
