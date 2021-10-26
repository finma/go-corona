interface ButtonProps {
  label: string;
  color: "blue" | "red";
}

export const Button = (props: ButtonProps) => {
  // const { label, color } = props;
  return (
    <button
      type="button"
      className={`hidden md:block py-4 px-8 font-menu text-xs font-extrabold tracking-widest leading-3 text-center text-white uppercase  rounded-md shadow-md transition duration-200 ease-in focus:outline-none ${
        props.color === "blue" ? "bg-[#4285F4] hover:bg-[#1b66df]" : "bg-[#EC5863] hover:bg-[#e22935]"
      }`}
    >
      {props.label}
    </button>
  );
};
