export interface ThemeOptions {
    palette?: {
        text: {
            primary: string,
            secondary: string,
        },
        info: {
            main: string,
            light:string,
        },
        background: {
            default: string,
        },
    },
    typography: {
        fontFamily: string,
    },
}