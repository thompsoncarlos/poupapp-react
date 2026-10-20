import { IconSavings } from "../icons";
import { ProgressBar } from "../ProgressBar";

export const SavingsStatus = ({ percent }) => {
  return (
    <div className="">
      <p>
        <IconSavings /> Economizar
      </p>
      <ProgressBar percent={percent} />
    </div>
  );
};
