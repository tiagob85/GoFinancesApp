import 'styled-components';
import theme from './theme';

//será acessado e sobrescrito
//Terá o mesmo tipo do styled- componentes
declare module 'styled-componentes' {
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType{}
}