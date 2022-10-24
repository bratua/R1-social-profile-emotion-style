import styled from 'styled-components';

// export const StatsList = styled.ul`
// padding: 0px;
// margin: 0px;
// display: flex;
// justify-content: center;
// background-color: blue;
// height: 300px;
// `;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1 1 33.3333%;
  justify-content: center;
  align-items: center;
  /* border: 2px; */
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.statsBorderColor};
  border-style: ${p => p.theme.borderStyles.line};
`;

export const Label = styled.span`
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: ${p => p.theme.fontSizes[3]};
  color: ${p => p.theme.colors.secondTextColor};
  margin-bottom: ${p => p.theme.space[5]}px;

  /* font-weight: 500;
  font-size: 30px;
  color: #768696; */
`;

export const Quantity = styled.span`
  font-weight: ${p => p.theme.fontWeights[3]};
  font-size: ${p => p.theme.fontSizes[3]};
  color: ${p => p.theme.colors.thirdTextColor};
`;
