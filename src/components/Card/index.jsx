const Card = ({ children }) => {
  return <div className="">{children}</div>;
};

export const CardHeader = ({ children }) => {
  return <div className="">{children}</div>;
};

export const CardBody = ({ children }) => {
  return <div className="">{children}</div>;
};

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
