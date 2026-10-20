const TAGS = {
  h1: "h1",
  h2: "h2",
  body: "p",
};

const VARIANT_CLASS = {
  h1: "m-0 text-neutral-text text-[31px] leading-[120%]",
  h2: "m-0 text-neutral-text",
  body: "m-0 text-neutral-text text-base leading-[120%]",
}

export const Typography = ({ children, variant }) => {
  const Component = TAGS[variant] || "p";
  const className = VARIANT_CLASS[variant] || VARIANT_CLASS.body;

  return <Component className={className}>{children}</Component>;
};
