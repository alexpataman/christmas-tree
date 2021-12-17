type DecorationFilterGroupProps = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

export default function DecorationFilterGroup(
  props: DecorationFilterGroupProps
) {
  return (
    <div>
      <h4>{props.title}</h4>
      <div>{props.children}</div>
    </div>
  );
}
