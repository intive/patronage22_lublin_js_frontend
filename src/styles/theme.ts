import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        text: {
            primary: '#003E7D',
            secondary: '#102A42',
        },
        info: {
            main: '#102A42',
            light:'#0080F0',
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

