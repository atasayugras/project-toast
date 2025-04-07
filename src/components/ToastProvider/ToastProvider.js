import React from 'react';
import useKeyDown from "../../hooks/useKeyDown";

const ToastContext = React.createContext(null);

export function useToast() {
  return React.useContext(ToastContext);
}
function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  // Add a new toast
  const addToast = (message, variant = 'notice') => {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };

    setToasts((currentToasts) => [...currentToasts, newToast]);
  }

  // Remove a toast by id
  const removeToast = (id) => {
    setToasts((currentToasts) =>
        currentToasts.filter((toast) => toast.id !== id)
    );
  };

  // Clear all toasts
  const clearAllToasts = () => {
    setToasts([]);
  }

  // Use the hook to listen for the Escape key
  useKeyDown('Escape', clearAllToasts);

  // The Provider values to provide
  const value = {
    toasts,
    addToast,
    removeToast,
  };

  return (
      <ToastContext.Provider value={value}>
        {children}
      </ToastContext.Provider>);
}

export default ToastProvider;
