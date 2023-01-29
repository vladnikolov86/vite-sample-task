import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        base: string;
        colors: {
            backgroundMain: string;
            purple: string;
            white: string;
        },
        fonts: {
            header: string;
            bigHeader: string;
        },
        spacings: {
            small: string;
            medium: string;
            large: string;
        }
    }
}