// src/components/Account/index.jsx
import { IconBank } from "../icons";

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const Account = ({ account }) => {
  return (
    <div className="">
      <div>
        <p className="">
          <IconBank />
          <strong>{account.bank}</strong>
        </p>
      </div>
      <div className="">
        <p>
          <strong>Saldo</strong>
        </p>
        <p>{formatter.format(account.balance)}</p>
      </div>
    </div>
  );
};
