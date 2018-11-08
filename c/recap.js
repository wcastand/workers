import React from 'react'
import styled from 'react-emotion'

import { getName } from '../utils'
import { EmptyCard, Title, Container, Worker } from './recap_components'

export default ({ workers }) => {
  const liked = workers.filter(w => w.liked)
  const noop = workers.filter(w => !w.liked)

  return (
    <EmptyCard>
      <Title>Liked</Title>
      <Container>
        {liked.map(w => (
          <Worker key={`worker_${w._id}`} liked>
            {getName(w)}
          </Worker>
        ))}
      </Container>
      <Title>Noop</Title>
      <Container>
        {noop.map(w => (
          <Worker key={`worker_${w._id}`}>{getName(w)}</Worker>
        ))}
      </Container>
    </EmptyCard>
  )
}
