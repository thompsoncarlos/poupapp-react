export const List = ({ children, ...props }) => {
  return (
    <ul className="" {...props}>
      {children}
    </ul>
  );
};
