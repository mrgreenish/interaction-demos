import styled from 'styled-components';

export const AnimatedTitle = styled.div`
  span {
    display: block;
  }

  .line {
    display: inline-block;
    overflow: hidden;
  }
  .chars {
    will-change: transform;
  }

  .next-line {
    display: block;
  }
`;
