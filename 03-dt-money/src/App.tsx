import { Transactions } from "./pages/Transactions";
import { TransactionsProvider } from "./contexts/TransactionsContext";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { GlobalStyles } from "./styles/global";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
