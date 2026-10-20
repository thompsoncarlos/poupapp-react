
const formater = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
});

export const TransactionItem = ({ item }) => {
  // const detailsAddClassName = item.value >= 0 ? styles.income : styles.expense;

  return (
    <div className="">
      <div className="">
        <p>{item.description}</p>
        <p>{formater.format(item.value)}</p>
      </div>
      <div className="">
        {new Date(item.date).toLocaleDateString("pt-PT")}
      </div>
    </div>
  );
};
