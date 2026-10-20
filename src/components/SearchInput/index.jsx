import { IconSearch } from "../icons";

export const SearchInput = (props) => {
  return (
    <div className="">
      <IconSearch />
      <input className="" {...props} />
    </div>
  );
};
