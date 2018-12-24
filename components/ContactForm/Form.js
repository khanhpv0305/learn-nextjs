import React from 'react'
import styled, { css } from 'styled-components'

const Form = styled.div``

Form.Msg = styled.div`
  color: #947054;
  font-weight: 500;
`

Form.Wrapper = styled.form``

Form.Input = styled.input.attrs({ type: 'text' })`
  display: block;
  width: 100%;
  height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid #e1dddd;
  margin-bottom: 1rem;

  &:focus {
    border-color: #9a9696;
    outline: none;
  }
`

Form.TextArea = styled.textarea.attrs({ className: 'd-block w-100' })`
  padding: 11px 15px;
  border: 1px solid #e1dddd;
  min-height: 7.5rem;
  margin-bottom: 1rem;

  &:focus {
    border-color: #9a9696;
    outline: none;
  }
`

Form.SubmitBtn = styled.button.attrs({ type: 'submit' })`
  background: #947054;
  border: none;
  padding: 10px 15px;
  font-size: 1.15rem;
  color: #fff;
`

export default class extends React.Component {
  render() {
    return (
      <Form>
        {false && <Form.Msg>Successfully</Form.Msg>}

        <Form.Wrapper>
          <Form.Input placeholder="Name" />

          <Form.Input placeholder="Phone number" />

          <Form.Input placeholder="Email" />

          <Form.TextArea placeholder="Content" />

          <Form.SubmitBtn>Send message</Form.SubmitBtn>
        </Form.Wrapper>
      </Form>
    )
  }
}