import styles from './inputControle.css'
export default function InputControle(props){
    return(
        <div className={styles.container}>
            {props.label && <label>{props.label}</label>}
            <input type='text' {...props}/>

        </div>
    )
}