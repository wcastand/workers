import { getName, goNext, getCurrentWorker, updateLiked } from '../utils'

import workers from '../workers'

test('getName returns first name and last name', () => {
  expect(getName(workers[0])).toBe('Michael Mullen')
})

test('goNext to return the index + 1', () => {
  const workers_length = 3
  const index = 1
  expect(goNext(index, workers_length)).toBe(index + 1)
})

test('goNext to return null', () => {
  const workers_length = 3
  const index = 2
  expect(goNext(index, workers_length)).toBe(null)
})

test('getCurrentWorker to return the current worker', () => {
  const state = {
    index: 2,
    workers,
  }
  expect(getCurrentWorker(state)).toEqual(workers[2])
})

test('getCurrentWorker to return null', () => {
  const state = {
    index: null,
    workers,
  }
  expect(getCurrentWorker(state)).toEqual(null)
})

test('updateLiked to update the correct worker with liked = true', () => {
  const liked = updateLiked(true, workers[0]._id)
  expect(liked(workers[0])).toMatchObject({
    ...workers[0],
    liked: true,
  })
})
test('updateLiked to update the correct worker with liked = false', () => {
  const liked = updateLiked(false, workers[0]._id)
  expect(liked(workers[0])).toMatchObject({
    ...workers[0],
    liked: true,
  })
})

test('updateLiked to return worker without changes', () => {
  const liked = updateLiked(false, workers[0]._id)
  expect(liked(workers[1])).toMatchObject(workers[1])
})
