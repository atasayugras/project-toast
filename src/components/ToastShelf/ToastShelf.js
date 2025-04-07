import React from 'react';
import styles from './ToastShelf.module.css';
import Toast from '../Toast';
import { useToast } from '../ToastProvider';

function ToastShelf() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) {
    return null;
  }

  return (
    <ol
        className={styles.wrapper}
        role="region"
        aria-live="polite"
        aria-label="Notification"
    >
        {toasts.map(({id, variant, message}) => (
            <li key={id} className={styles.toastWrapper}>
                <Toast variant={variant} handleDismiss={() => removeToast(id)}>{message}</Toast>
            </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
