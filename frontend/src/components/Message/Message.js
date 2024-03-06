import React from 'react';
import Alert from '@mui/material/Alert';

const Message = ({ severity, children }) => {
  return <Alert severity={severity}>{children}</Alert>;
};

Message.defaultProps = {
  severity: 'info',
};

export default Message;

// import React from 'react';
// import { Alert } from 'react-bootstrap';

// const Message = ({ variant, children }) => {
//   return <Alert variant={variant}>{children}</Alert>;
// };

// Message.defaultProps = {
//   variant: 'info',
// };

// export default Message;
