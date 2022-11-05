import styled from "styled-components";
import { colors, TextDefault } from "../../styles/globalStyles";

export const Container = styled.div`
  width: 100%;
  height: 800px;
  background-color: ${colors.white};
  box-shadow: 4px 0px 8px 0px ${colors.backgroundShadow};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Text = styled(TextDefault)`
  font-size: 1rem;
  color: ${colors.white};
  font-weight: bold;
  text-transform: none;
`;
