import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/material/styles';
import  CssBaseline  from '@mui/material/CssBaseline';
import theme from '../utils/theme';
import {AuthProvider} from '../context/AuthContext';
import {DrawingProvider} from '../context/DrawingContext';


function MyApp({Component, pageProps}: AppProps){
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AuthProvider>
                <DrawingProvider>
                    <Component {...pageProps}/>
                </DrawingProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default MyApp