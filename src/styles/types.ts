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
        primary: {
            main: string,
            light:string,
            dark:string,
        },
        background: {
            default: string,
        },
    },
    typography: {
        fontFamily: string,
    },
}