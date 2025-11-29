import styles from "./Checkbox.module.css"
import Checkbox from '@mui/material/Checkbox';

const CheckboxComponent = ({title}) => {
  return (
    <>
        <div className={styles.checkboxItem}>
            <Checkbox size="large"/>
            <div className={styles.checkboxTitle}>{title}</div>
        </div>
    </>
  )
};

export default CheckboxComponent;
