import clsx from "clsx";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={clsx(css.table)}>
      <thead>
        <tr>
          <th className={clsx(css.tableTh)}>Type</th>
          <th className={clsx(css.tableTh)}>Amount</th>
          <th className={clsx(css.tableTh)}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <tr
              className={clsx(css.tableTrWhite, {
                [css.tableTrGray]: index % 2,
              })}
              key={id}
            >
              <td className={clsx(css.tableTd)}>{type}</td>
              <td className={clsx(css.tableTd)}>{amount}</td>
              <td className={clsx(css.tableTd)}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
