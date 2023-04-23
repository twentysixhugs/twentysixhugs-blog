declare module "@mui/material/styles" {
  export interface Theme {
    colors: {
      background: {
        first: string;
        second: string;
        third: string;
      };
      text: {
        primary: string;
        heading: string;
        description: string;
        pageHeading: string;
        label: string;
      };
    };
    page: {
      padding: {
        lg: string;
      };
      margin: {
        listHeading: string;
        top: string;
      };
    };
  }

  export interface ThemeOptions {
    colors: {
      background: {
        first: string;
        second: string;
        third: string;
      };
      text: {
        primary: string;
        heading: string;
        label: string;
        description: string;
        pageHeading: string;
      };
    };
    page: {
      padding: {
        lg: string;
      };
      margin: {
        listHeading: string;
        top: string;
      };
    };
  }
}

export {};
