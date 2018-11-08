import React, { useRef, useEffect } from 'react'
import styled from 'react-emotion'
import { useSpring, animated } from 'react-spring'
if (process.browser) {
  const Hammer = require('hammerjs')
}

import { getName } from '../utils'
import {
  CardStack,
  Card,
  Container,
  Img,
  Name,
  Age,
  About,
  TagContainer,
  Tag,
} from './card_components'

export default ({ worker, dispatch }) => {
  const node = useRef()
  const [bg, setBg] = useSpring({
    value: 0,
    from: { value: 0 },
  })
  const [opacity, setOpacity] = useSpring({
    value: 1,
    from: { value: 1 },
    immediate: true,
  })
  const [delta, setDelta] = useSpring({
    pos: [0, 0],
    from: { pos: [0, 0] },
  })

  const onEnd = ev => {
    if (ev.distance > window.innerWidth / 2) {
      const isRight = ev.deltaX > 0
      setOpacity({ value: 0 })
      setBg({ value: isRight ? 160 : -160 })
      setDelta({
        pos: [ev.deltaX + (isRight ? window.innerWidth : -window.innerWidth), ev.deltaY],
      })
      dispatch({ type: isRight ? 'liked' : 'noop', id: worker._id })
    } else {
      setBg({ value: 0 })
      setDelta({ pos: [0, 0] })
    }
  }

  useEffect(
    () => {
      if (process.browser) {
        const manager = new Hammer.Manager(node.current, { recognizers: [[Hammer.Pan]] })
        manager.set({ enable: true })
        manager.on('panmove', ev => {
          setBg({ value: ev.deltaX })
          setDelta({ pos: [ev.deltaX, ev.deltaY] })
        })
        manager.on('panend', onEnd)
        return () => {
          manager.off('panmove')
          manager.off('panend')
          manager.stop(true)
        }
      }
    },
    [node, worker],
  )

  return (
    <CardStack
      style={{
        background: bg.value.interpolate({
          range: [-160, 0, 160],
          output: ['#FF3D5A', '#FFF', '#C0DE5D'],
        }),
      }}
    >
      <Card
        innerRef={node}
        style={{
          opacity: opacity.value,
          transform: delta.pos.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
        }}
      >
        <Img alt={getName(worker)} src={worker.img} />
        <Container>
          <Name>
            {getName(worker)}, <Age>{worker.age}</Age>
          </Name>
          <TagContainer>
            {worker.tags.map(tag => (
              <Tag key={`tag_${tag}`}>{tag}</Tag>
            ))}
          </TagContainer>
          <About>{worker.about}</About>
        </Container>
      </Card>
    </CardStack>
  )
}
