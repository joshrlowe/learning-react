export default function CustomInput({ label, invalid, ...props }) {
  let labelClasses = [
    "block",
    "mb-2",
    "text-xs",
    "font-bold",
    "tracking-wide",
    "uppercase",
  ];
  let inputClasses = [
    "w-full",
    "px-3",
    "py-2",
    "leading-tight",
    "bg-stone-300",
    "border",
    "rounded",
    "shadow",
  ];

  if (invalid) {
    labelClasses.push("text-red-400");
    inputClasses.push(...["text-red-500", "bg-red-100", "border-red-300"]);
  } else {
    labelClasses.push("text-stone-300");
    inputClasses.push(...["text-gray-700", "bg-stone-300"]);
  }

  return (
    <p>
      <label className={labelClasses.join(" ")}>{label}</label>
      <input className={inputClasses.join(" ")} {...props} />
    </p>
  );
}
