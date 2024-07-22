export default function Cart({ name, children }) {
  return (
    <div>
      <h2>{name}</h2>
      {children}
    </div>
  );
}
