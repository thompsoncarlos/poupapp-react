const formater = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
});

export const DailyBudget = ({ value }) => {
  return <p className="">{formater.format(value)}</p>;
};
