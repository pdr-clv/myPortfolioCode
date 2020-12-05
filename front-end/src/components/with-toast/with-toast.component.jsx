import React from 'react';

import { ToastProvider } from 'react-toast-notifications';

//High order component to wrap component with ToastProvider and later using toast alert messages
const WithToastProvider = (WrappedComponent) => {
  const ComponentToasted = ({placealert, timedismiss, ...otherprops}) => (
    <ToastProvider 
      placement={placealert}
      autoDismissTimeout={timedismiss}
    >
      <WrappedComponent {...otherprops} />
    </ToastProvider>
  );
  return ComponentToasted;
};

export default WithToastProvider;