import { useContextSelector } from 'use-context-selector'
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { dataFormatter, priceFormatter } from '../../utils/formatter';

import { TransactionsContext } from '../../contexts/TransactionsContext';

import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";




export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(trasaction => (
              <tr key={trasaction.id}>
                <td width='50%'>{trasaction.description}</td>
                <td>
                  <PriceHighLight variant={trasaction.type}>
                    {trasaction.type === 'outcome' && '- '}
                    {priceFormatter.format(trasaction.price)}
                  </PriceHighLight>
                </td>
                <td>{trasaction.category}</td>
                <td>{dataFormatter.format(new Date(trasaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}