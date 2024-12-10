import system from "./theme"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)