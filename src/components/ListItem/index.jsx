export const ListItem = ({ children, ...props }) => {
  return (
    <li className="" {...props}>
      {children}
    </li>
  );
};
