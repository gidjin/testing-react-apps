// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  render(<Login onSubmit={handleSubmit} />)
  // 🐨 get the username and password fields via `getByLabelText`
  const usernameInput = screen.getByLabelText(/username/i)
  const passwordInput = screen.getByLabelText(/password/i)
  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want
  userEvent.type(usernameInput, "chucknorris")
  userEvent.type(passwordInput, "youdontaskchuckforapassword")
  // 🐨 click on the button with the text "Submit"
  const submit = screen.getByRole("button")
  userEvent.click(submit)
  expect(handleSubmit).toHaveBeenCalledWith({
    username: "chucknorris",
    password: "youdontaskchuckforapassword",
  })
})

/*
eslint
  no-unused-vars: "off",
*/
