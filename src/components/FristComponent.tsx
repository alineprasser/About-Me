type ComponentProps = {
  text?: string;
};

export function FirstComponent(props: ComponentProps) {
  return <h1>{props.text}</h1>;
}
