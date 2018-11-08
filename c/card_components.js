import styled from 'react-emotion'
import { animated } from 'react-spring'

export const CardStack = styled(animated.div)`
  position: relative;
  display: flex;
  background-color: #f1f1f1;
  border-radius: 4px;
  padding: 24px;
  width: 320px;
  height: 480px;
`

export const Card = styled(animated.div)`
  overflow: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 4px;
  background-color: #f1f1f1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transform-origin: bottom center;
`

export const Container = styled('div')`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px;
`

export const Img = styled('div')`
  flex: 2 0 60%;
  width: 100%;
  background: url('${({ src }) => src}') top center no-repeat;
  background-size: cover;
`

export const Name = styled('h1')`
  font-size: 1.3rem;
  margin: 0;
  padding: 0;
  margin-bottom: 8px;
`
export const Age = styled('span')`
  font-size: 1rem;
  color: #a7a7a7;
`
export const About = styled('p')`
  font-size: 0.9rem;
`

export const TagContainer = styled('div')`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const Tag = styled('span')`
  margin: 2px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
  line-height: 16px;
  color: #fff;
  background-color: #fc354c;
`
