import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function RootComponent() {
  const [value, setValue] = useState(2);

  return (
    <StrictMode>
      <div>
        <App />

        <Box sx={{ '& > legend': { mt: 2 } }}>
          <Typography component="legend">Controlled</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      </div>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<RootComponent />);
