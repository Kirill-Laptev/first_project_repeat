import React from 'react';
import styles from './FormControls.module.css'

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {hasError ? <span>{meta.error}</span>: ''}
            <div><input {...input} {...props}/></div>
        </div>
    )
}