import React from 'react';
import styles from './Toast.module.css';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';
import VisuallyHidden from "../VisuallyHidden";


function Toast({variant, handleDismiss, children}) {
    const ICONS_BY_VARIANT = {
        notice: Info,
        warning: AlertTriangle,
        success: CheckCircle,
        error: AlertOctagon,
    };
    const Icon = ICONS_BY_VARIANT[variant];


  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
          <Icon size={24} />
      </div>

      <p className={styles.content}>
          <VisuallyHidden>
              {variant} -
          </VisuallyHidden>
          {children}
      </p>
      <button
          className={styles.closeButton}
          onClick={handleDismiss}
          aria-label="Dismiss message"
          aria-live="off">
        <X size={24} />
      </button>
    </div>
  );
}


/*
<ol
  class="ToastShelf_wrapper"
+ role="region"
+ aria-live="polite"
+ aria-label="Notification"
>
  <li class="ToastShelf_toastWrapper">
    <div class="Toast_toast Toast_error">
      <div class="Toast_iconContainer">
        <!-- Variant SVG icon -->
      </div>
      <p class="Toast_content">
+       <div class="VisuallyHidden_wrapper">
+         error -
+       </div>
        Something went wrong! Please contact customer support
      </p>
      <button
        class="Toast_closeButton"
+       aria-label="Dismiss message"
+       aria-live="off"
      >
        <!-- Close SVG icon -->
-       <div class="VisuallyHidden_wrapper">
-         Dismiss message
-       </div>
      </button>
    </div>
  </li>
</ol>
*/
export default Toast;
