export default function Button({
  children = "Button",
  classname = "bg-black",
  onClick = () => {},
  type = "button",
}) {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md transition hover:cursor-pointer hover:opacity-90 ${classname} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
