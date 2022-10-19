import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  gap: 10px;

  margin: 10px 0;
  padding-left: 10px;
  align-items: center;

  border: 2px solid rgb(124, 121, 121);
  border-radius: 5px;
  box-shadow: 5px 5px rgb(189, 187, 187);
`;

export const FriendStatus = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  background-color: black;
  border-radius: 50%;

  background-color: ${p => (p.status ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  width: 70px;
  height: 70px;
  padding: 5px;
  border: 1px solid rgb(219, 214, 214);
  background-color: ${p => (p.status ? '#ceecce' : '#dab9b9')};
  /* background-color: black; */
  border-radius: 15%;
`;

export const FriendName = styled.p`
  font-weight: 700;
  color: ${p => (p.status ? 'green' : 'red')};
`;
