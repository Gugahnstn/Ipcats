import styled, { css } from "styled-components";

export const HeaderComponent = styled.header`
  ${({ theme }) => css`
    box-shadow: 0px 4px 4px rgba(81, 42, 18, 0.1);
    background-color: ${theme.colors.background};
    font-family: ${theme.font.families.font_default};
    
    position: fixed;
    width: 100%;
    top: 0px;
  `};
`;

export const ContainerHeader = styled.div`
  justify-content: space-between;
  padding: 1.5rem 1rem;
  align-items: center;
  display: flex;
  gap: 0.625rem;
`;

export const Image = styled.img`
  width: 7.25rem;
`;

export const TextIp = styled.p`
  line-height: 1rem;
  color: #ffff;
`;

export const SpanTextIp = styled.span`
  text-decoration: underline;
`;
