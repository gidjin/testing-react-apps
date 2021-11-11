// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'
import Login from '../../components/login'

const buildLoginForm = (params) => {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...params,
  }
}

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  render(<Login onSubmit={handleSubmit} />)
  // 🐨 get the username and password fields via `getByLabelText`
  const usernameInput = screen.getByLabelText(/username/i)
  const passwordInput = screen.getByLabelText(/password/i)
  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want
  const { username, password } = buildLoginForm()
  userEvent.type(usernameInput, username)
  userEvent.type(passwordInput, password)
  // 🐨 click on the button with the text "Submit"
  const submit = screen.getByRole("button")
  userEvent.click(submit)
  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password,
  })
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})

test('submitting the form calls onSubmit with username and specific password', () => {
  const handleSubmit = jest.fn()
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  render(<Login onSubmit={handleSubmit} />)
  // 🐨 get the username and password fields via `getByLabelText`
  const usernameInput = screen.getByLabelText(/username/i)
  const passwordInput = screen.getByLabelText(/password/i)
  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want
  const { username, password } = buildLoginForm({ password: "abc" })
  userEvent.type(usernameInput, username)
  userEvent.type(passwordInput, password)
  // 🐨 click on the button with the text "Submit"
  const submit = screen.getByRole("button")
  userEvent.click(submit)
  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password,
  })
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/
