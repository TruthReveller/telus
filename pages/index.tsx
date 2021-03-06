import Link from 'next/link'
import Head from 'next/head'
import type {User} from '../types'
import { GetStaticProps } from 'next'
import { getUsers } from './api/users'
import styled from "styled-components";
import UserList from '../components/userList'

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 480px;
  flex-direction: column;
  text-align: center;
  background-color: #f5f4f0;
  margin: 1rem;
  border-radius: 25px;
`;

type Props = {
  users: Array<User>
}

const Home = (props:Props) => {
  const {users} = props;
  return (
    <div>
      <Head>
        <title>Panda</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Panda Dashboard</h1>
      <Container>
        <UserList users={users} />
      </Container>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getUsers();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { users: data }, // will be passed to the page component as props
  }
}


export default Home