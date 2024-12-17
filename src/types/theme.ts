export interface ThemeConfig {
    evenRows: { color: string; backgroundColor: string };
    oddRows: { color: string; backgroundColor: string };
    evenCellValues: { color: string; backgroundColor: string };
    oddCellValues: { color: string; backgroundColor: string };
}

export type ThemeValues = {
  [K in keyof ThemeConfig]: { [P in keyof ThemeConfig[K]]: string };
};