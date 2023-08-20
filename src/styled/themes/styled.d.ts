import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fontFamily: string;
        fontSizes: {
            small: number;
            medium: number;
            large: number;
        };
        fontMeasureUnit: string;
        colors: {
            primary: string;
            black: string;
            white: string;
        };
    }
}