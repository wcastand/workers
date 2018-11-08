import styled from 'react-emotion'

export const EmptyCard = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: 700;
  font-size: 1.3rem;
  padding: 24px;
  padding-top: 0;
  background-color: #f1f1f1;
`

export const Title = styled('h1')`
  font-size: 2rem;
`

export const Container = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 12px;
`
export const Worker = styled('span')`
  font-size: 1rem;
  color: ${({ liked }) => (liked ? '#4DAB8C' : '#FF3D5A')};
`
