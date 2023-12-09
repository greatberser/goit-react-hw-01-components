import css from './Transactions.module.css'

export const Transactions = ({ transactions }) => {
    return (
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <tr className={css.tr} key={id}>
              <td className={css.tdName}>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Transactions;
  