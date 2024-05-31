import styled from "styled-components";
import React from "react";
import { ColorKey, HeadingSize } from "../../style/theme";

interface Props {
  children: React.ReactNode;
  size: HeadingSize;
  color?: ColorKey;
}

function Title({ children, size }: Props) {
  return <TitleStyle size={size}>{children}</TitleStyle>;
}

const TitleStyle = styled.h1<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.heading[size].fontSize};
  color: ${({ theme, color }) => theme.color[color || "primary"]};
`;

export default Title;
