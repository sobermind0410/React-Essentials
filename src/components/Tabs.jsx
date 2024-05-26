export default function Tabs({  
  children,
  buttonSlot,
  buttonsContainer = "menu",
}) {
  const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer> {buttonSlot} </ButtonsContainer>
      {children}
    </>
  );
}
