import styles from '../styles/components/inputforms.module.css'

const InputForms = ({type, placeholder}) => {
  return (
    <input className={styles.formInput}
        type={type}
        placeholder={placeholder}
        value="" />
  )
}

export default InputForms