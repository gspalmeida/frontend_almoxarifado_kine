import styled from "styled-components";

interface ContainerProps {
  color: string;
  outline: boolean;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 16px;

  width: 95px;
  height: 40px;
  background-color: ${({ outline, color }) => (outline ? "#fff" : color)};

  border: ${({ outline, color }) =>
    outline ? "2px solid rgba(101, 88, 245, 0.4)" : "none"};

  color: ${({ outline, color }) => (outline ? color : "#fff")};

  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #c9ced2;
    color: #fff;
    cursor: default;
  }
`;
