export interface ColumnTypes {
  headline: string;
  paragraph?: string;
  info: string[];
}

export interface NavbarItemTypes {
  link: string;
  infoContainer1: ColumnTypes;
  infoContainer2: ColumnTypes;
  infoContainer3: ColumnTypes;
  infoContainer4: ColumnTypes;
}

export type NavbarDropdownData = NavbarItemTypes[];
