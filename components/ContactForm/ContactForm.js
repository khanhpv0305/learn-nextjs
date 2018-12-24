import styled, { css } from 'styled-components'

import { FaMobileAlt } from 'react-icons/fa'

const CF = styled.div`
  margin-bottom: 50px;
`

CF.WThumbnail = styled.div``

CF.Thumbnail = styled.img`
  width: 100%;
  height: auto;
`

CF.Contact = styled.div`
  padding: 40px;
  border: 1px solid #e1dddd;
`

CF.Contact.Name = styled.div`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`

CF.Contact.Role = styled.div`
  color: #947054;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
`

CF.Contact.WItems = styled.div`
  margin-bottom: 40px;
`

CF.Contact.ItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  margin-right: 0.75rem;
  color: #947054;
`

CF.Contact.Item = styled.div`
  display: flex;
  
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`

CF.Contact.WForm = styled.div``

export default CF