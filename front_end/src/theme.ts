import { defaultConfig, createSystem } from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primary: { value: "#FFB326" },     
        secondary: { value: "#9AAB55" },   
        background: { value: "#F7FAFC" },  
        text: { value: "#2D3748" },  
      },
      fonts: {
        body: { value: `"Roboto", sans-serif` }, 
      },
      sizes: {
        1: { value: "4px" }, 
        2: { value: "8px" },  
        3: { value: "12px" },
        4: { value: "16px" },
      },
    },
  },
} );

export default system;
