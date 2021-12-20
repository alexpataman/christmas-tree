import './DecorationFilterGroup.scss';

type DecorationFilterGroupProps = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

export default function DecorationFilterGroup(
  props: DecorationFilterGroupProps
) {
  return (
    <div className="DecorationFilterGroup">
      <h4 className="title">{props.title}</h4>
      <div>{props.children}</div>
    </div>
  );
}
