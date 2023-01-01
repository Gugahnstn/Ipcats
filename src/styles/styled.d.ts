import theme from "./theme";

const Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {};
}