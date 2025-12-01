import React from 'react';
import styles from './InputText.module.css';

const InputText = ({ label, name, value, onChange, placeholder, type = 'text', required = false }) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.inputField}
                required={required}
            />
        </div>
    );
};

export default InputText;