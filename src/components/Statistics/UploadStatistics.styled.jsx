import styled from 'styled-components';
import randomColor from '../../Utils/randomColor.js';

export const Statistics = styled.section`
  width: 350px;
`;

export const Title = styled.h2`
  margin: ${p => p.theme.space[9]}px;
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes[4]};
  font-weight: ${p => p.theme.fontWeights[3]};
  text-align: center;
`;

export const StatList = styled.ul`
  /* margin: 0;
  padding: 0;
  display: flex;
  list-style: none; */
`;

export const StatItem = styled.li`
  display: flex;
  height: ${p => p.theme.space[10]}px;
  flex-direction: column;
  flex: 1 0 20%;
  justify-content: space-evenly;
  align-items: center;
  color: ${p => p.theme.colors.white};
  background-color: ${randomColor};
`;

export const StatLebel = styled.span`
  font-size: ${p => p.theme.fontSizes[0]};
`;
export const StatPercentage = styled.span`
  font-size: ${p => p.theme.fontSizes[1]};
  font-weight: ${p => p.theme.fontWeights[2]};
`;
