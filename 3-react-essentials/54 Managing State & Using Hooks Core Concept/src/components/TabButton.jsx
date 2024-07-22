export default function TabButton({ children, onSelect }) {
  console.log("TabButton Component Rendering");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
