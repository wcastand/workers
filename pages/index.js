import React, { useReducer } from 'react'
import styled from 'react-emotion'

import Card from '../c/card'
import Recap from '../c/recap'

import { updateLiked, goNext, getCurrentWorker } from '../utils'

const CardStack = styled('div')`
  position: relative;
  display: flex;
  width: 320px;
  height: 480px;
`

export default ({ data }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'liked':
          return {
            index: goNext(state.index, state.workers.length),
            workers: state.workers.map(updateLiked(true, action.id)),
          }
          break
        case 'noop':
          return {
            index: goNext(state.index, state.workers.length),
            workers: state.workers.map(updateLiked(false, action.id)),
          }
          break
        default:
          return state
      }
    },
    { index: 0, workers: data },
  )
  const worker = getCurrentWorker(state)
  return (
    <CardStack>
      {worker === null ? <Recap workers={state.workers} /> : <Card {...{ worker, dispatch }} />}
    </CardStack>
  )
}
Recap
