export default function Tabs({ children, buttons, ButtonsContainer }) {
  const ButtonContainer = ButtonsContainer || "menu";
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
