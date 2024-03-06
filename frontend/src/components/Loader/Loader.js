import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh' // Adjust the height as needed
    >
      <CircularProgress size={100} />
    </Box>
  );
};

export default Loader;

// import React from 'react';
// import { Spinner } from 'react-bootstrap';

// const Loader = () => {
//   return (
//     <Spinner
//       animation='border'
//       role='status'
//       style={{
//         width: '100px',
//         height: '100px',
//         margin: 'auto',
//         display: 'block',
//       }}
//     >
//       <span className='sr-only'>Loading...</span>
//     </Spinner>
//   );
// };

// export default Loader;
