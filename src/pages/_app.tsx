import "../styles/globals.css";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
