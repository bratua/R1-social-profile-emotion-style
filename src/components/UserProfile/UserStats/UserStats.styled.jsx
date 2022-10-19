import styled from '@emotion/styled';

export const StatsList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  background-color: #f3f6f9;
  height: 155px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1 1 33.3333%;
  justify-content: space-evenly;
  align-items: center;
  outline: 2px solid #e4e9f0;
`;

export const Label = styled.span`
  color: #768696;
  font-size: 30px;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 35px;
  color: #1f3349;
`;
