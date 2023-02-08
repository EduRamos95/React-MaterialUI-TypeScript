import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { info } from "console";

type ThemeProp = {
    children: JSX.Element;
}

export enum themePalette {
    BG = "#A6C1D3",
    CELESTECORE = "#A6C1D3",
    CELESTECORELIGTH = "#B7CDDB",
    CELESTECOREDARK = "#748793",
    NARANJACORE = "#F97A00",
    NARANJACORELIGTH = "#FA9433",
    NARANJACOREDARK = "#AE5500",
    WHITECORE = "#F0F0F0",
    GRISCORE = "#9B999F",
    BLACKCORE = "#000000",
    FONT_GLOBAL = "'JetBrains Mono', monospace",
}

const theme = createTheme ({
    
    palette: {
        mode: 'light',
        background: {
            default: themePalette.WHITECORE,
        },
        secondary: {
            light:themePalette.CELESTECORELIGTH,
            main: themePalette.CELESTECORE,
            dark: themePalette.CELESTECOREDARK,
            contrastText: themePalette.BLACKCORE,
        },
        primary: {
            light:themePalette.NARANJACORELIGTH,
            main: themePalette.NARANJACORE,
            dark: themePalette.NARANJACOREDARK, 
            contrastText: themePalette.WHITECORE,
        },
        info:{
            main: themePalette.BLACKCORE,
        }
    },
    typography: {
        fontFamily: themePalette.FONT_GLOBAL,
    },
    // components: {
    //     MuiButton: {
    //         defaultProps: {
    //             style: {
    //                 textTransform: "none",
    //                 boxShadow: "none",
    //                 borderRadius: "0.5em",
    //             }
    //         }
    //     }
    // }
});

export const ThemeConfig: React.FunctionComponent<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}