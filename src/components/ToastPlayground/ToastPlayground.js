import React from 'react';
import styles from './ToastPlayground.module.css';
import Button from '../Button';
import ToastShelf from '../ToastShelf';
import { useToast } from '../ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [selectedVariant, setSelectedVariant] = React.useState('notice');
  const { addToast } = useToast();

  const handleSelection = (event) => {
    setSelectedVariant(event.target.value);
  }

  const handleChange = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!message) return;

    // Add the toast through context
    addToast(message, selectedVariant);

    //Reset
    setMessage('');
    setSelectedVariant('notice');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="./toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form onSubmit={handleSubmit}>
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Enter toast message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} onChange={handleChange} value={message} />
          </div>
        </div>


        <div className={styles.row}>
          <div className={styles.label}>Choose toast variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >

            {VARIANT_OPTIONS.map((option, index) => (
                <label htmlFor={`variant-${option}`}>
                  <input
                      id={`variant-${option}`}
                      key={index}
                      type="radio"
                      onChange={handleSelection}
                      name="variant"
                      value={option}
                      checked={selectedVariant === option}
                  />
                  {option}
                </label>
            ))}

          </div>
        </div>



        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
