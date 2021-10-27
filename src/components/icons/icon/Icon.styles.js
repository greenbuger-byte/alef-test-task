import styled from "styled-components";

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${props => props.size && !props.logo && `height: ${props.size / 10}rem`};
  width: ${props => props.size ? `${props.size / 10}rem` : `2.4rem`};

  svg{
    height: 100%;
    width: 100%;
  },
`;