
const formater = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
});

export const TransactionItem = ({ item }) => {
  const detailAddicionalClassName = item.value >= 0 ? "text-secondary-income" : "text-secondary-expense";

  return (
    <div className="flex justify-between">
      <div className={`flex flex-col gap-2 text-[15px] leading-[120%] font-medium ${detailAddicionalClassName}`}>
        <p className="m-0">{item.description}</p>
        <p className="m-0">{formater.format(item.value)}</p>
      </div>
      <div className="text-neutral-text text-sm leading-5">
        {new Date(item.date).toLocaleDateString("pt-PT")}
      </div>
    </div>
  );
};
