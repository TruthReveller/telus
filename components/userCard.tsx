import React from 'react';
import Link from 'next/link'
import { User } from '../types';
import styled from "styled-components";

const StyledUserCard = styled.div`
  display: flex;
  width: 500px;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 25px;
`;

type Props = {
    user: User
}

const UserCard = ({user}:Props) => {
    const {id, email, first_name, last_name, avatar} = user;
    return (
        <StyledUserCard>
            <img src={avatar} alt="avatar" />   
            <div>
                <span><h1>{first_name} {last_name}</h1></span>
                <span><h2>{email}</h2></span>
            </div>
        </StyledUserCard>
    )
};

export default UserCard;