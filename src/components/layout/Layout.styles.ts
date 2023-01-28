import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.backgroundMain};
`;