import styles from "./Checkbox.module.css"
import Checkbox from '@mui/material/Checkbox';

const CheckboxComponent = ({title, checked, onChange}) => {
  return (
    <>
        <div className={styles.checkboxItem} onClick={() => onChange(title)}>
            <Checkbox size="large" checked={checked} onChange={() => onChange(title)}/>
            <div className={styles.checkboxTitle}>{title}</div>
        </div>
    </>
  )
};

export default CheckboxComponent;
