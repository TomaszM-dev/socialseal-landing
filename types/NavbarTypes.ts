export interface ColumnTypes {
  headline: string;
  paragraph?: string;
  info: string[];
}

export interface NavbarItemTypes {
  link: string;
  firstColumn: ColumnTypes;
  secondColumn: ColumnTypes;
  thirdColumn: ColumnTypes;
  fourthColumn: ColumnTypes;
}

export type NavbarDropdownData = NavbarItemTypes[];
