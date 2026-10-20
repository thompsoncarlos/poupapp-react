const formatter = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
});

export const DailyBudget = ({ value }) => {
  return <p className="m-0 text-primary-highlight font-bold text-[39px] leading-[120px] text-center">{formatter.format(value)}</p>;
};
