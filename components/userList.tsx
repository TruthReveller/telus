
import React from 'react';
import Link from 'next/link'
import { User } from '../types';
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0;
  margin: 1rem;
  border-radius: 25px;
`;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 25px;
`;

type Props = {
    users: Array<User>
}

const UserList = ({users}:Props) => (
    <StyledList>
        {users instanceof Array && users.map(({id, email, first_name, last_name, avatar}:User) => (
            <Link key={id} href={`/user/${id}`}>
                <StyledListItem>
                    <img src={avatar} alt="avatar" />   
                    <div>{first_name} {last_name}</div>    
                    <div>{email}</div>
                </StyledListItem>
            </Link>))}
    </StyledList>
);

export default UserList;



