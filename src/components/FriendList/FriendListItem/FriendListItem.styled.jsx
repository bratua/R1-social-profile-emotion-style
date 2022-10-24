import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  gap: 10px;

  margin: 0;
  padding-left: 10px;
  align-items: center;

  border: ${p => p.theme.borders.normal};
  border-style: ${p => p.theme.borderStyles.line};
  border-color: ${p => p.theme.colors.mainBorderColor};

  border-radius: 5px;
  box-shadow: 5px 5px #bdbbbb;
`;

export const FriendStatus = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  background-color: black;
  border-radius: 50%;

  background-color: ${p =>
    p.status ? p.theme.colors.green : p.theme.colors.red};
`;

export const FriendAvatar = styled.img`
  width: 70px;
  height: 70px;
  padding: 5px;
  border: 1px solid rgb(219, 214, 214);
  background-color: ${p =>
    p.status ? p.theme.colors.onlineColor : p.theme.colors.offlineColor};
  /* background-color: black; */
  border-radius: 15%;
`;

export const FriendName = styled.p`
  font-weight: 700;
  color: ${p => (p.status ? p.theme.colors.green : p.theme.colors.red)};
`;
