import styled from '@emotion/styled';
import randomColor from '../../Utils/randomColor.js';

export const Statistics = styled.section`
  width: 350px;
`;

export const Title = styled.h2`
  margin: 25px 0;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`;

export const StatItem = styled.li`
  display: flex;
  height: 77px;
  flex-direction: column;
  flex: 1 0 20%;
  justify-content: space-evenly;
  align-items: center;
  color: #ffffff;
  background-color: ${randomColor};
`;

export const StatLebel = styled.span`
  font-size: 16px;
`;
export const StatPercentage = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
