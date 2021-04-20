import styled from 'styled-components'
import { deviceSizes } from '~/styles/device'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f1f1f1;
`
export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: ${deviceSizes.laptop};
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-weight: 300;
  margin-bottom: 0px;
`
