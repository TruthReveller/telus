// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import Home from '../pages/index'
import { User } from '../types';
 
 type Props = {
    users: Array<User>
  }

const users = [{
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    email: "george.bluth@reqres.in",
    first_name: "George",
    id: 1,
    last_name: "Bluth",
}];

 describe('Home', () => {
   it('renders a heading', () => {
     render(<Home users={users}/>)
 
     const heading = screen.getByText("george.bluth@reqres.in");
 
     expect(heading).toBeInTheDocument()
   })
 })