import { GetStaticProps } from 'next'
import type {User} from '../../types'
import { fetcher } from '../../utils/utils'
import { ParsedUrlQuery } from 'querystring';
import { getUser } from '../api/[id]';
import styled from "styled-components";
import UserCard from '../../components/userCard';

type Props = {
  user:User
}

interface Params extends ParsedUrlQuery {
  id: string,
}

const UserProfile = (props:Props) => {
  console.log(props);
  const {user} = props;
  const { id, email, first_name, last_name, avatar} = user;

  return (<UserCard user={user} />);
}

export async function getStaticPaths() {
  // these ids would be fetched from the api or database of highest traffic routes based on analytics etc
  return {
    paths: [
      { params: { id: '1', } },
      { params: { id: '2', } },
    ],
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const params = context.params!  // ! is a non-null assertion 
  const data = await getUser(params.id);

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { user: data }, // will be passed to the page component as props
  }
}

export default UserProfile