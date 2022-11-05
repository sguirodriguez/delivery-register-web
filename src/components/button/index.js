import { ButtonDefault } from "./styles";

const ButtonComponent = ({ children, onClick, style }) => {
  return (
    <>
      <ButtonDefault variant="contained" onClick={onClick} style={style}>
        {children}
      </ButtonDefault>
    </>
  );
};

export default ButtonComponent;
