export default function TabButton({ children, ...props }) {
  console.log("TabButton Component Rendering");
  return (
    <li>
      <button {...props}>{children}</button>
    </li>
  );
}
