import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        text: {
            primary: '#003E7D',
            secondary: '#0056AD',
        },
        info: {
            main: '#102A42',
            light:'#003E7D',
        },
        primary: {
            main: '#0057D8',
            light:'#448aff',
            dark:'#0057D8',
        },


        background: {
            default: '#f1f5f8',
        },
    },
    typography: {
        fontFamily: 'Lato',
    },
});
export default theme;

