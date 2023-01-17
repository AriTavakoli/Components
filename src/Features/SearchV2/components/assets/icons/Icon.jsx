
function Icon({ id, ...props }) {
  return (
    <svg {...props} width={props.size} height={props.size}>
      <use xlinkHref={`./sprite.svg#${id}`} />
    </svg>
  );
}

export default Icon;