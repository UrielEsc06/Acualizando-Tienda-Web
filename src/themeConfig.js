import { createTheme } from '@mui/material/styles';
import { lime } from "@mui/material/colors";


const theme = createTheme({
  
    palette: {
      primary: {
          main: '#b28900'
      },
      secondary: {
        main: lime[600]
      }
    },
  });


export default theme;
