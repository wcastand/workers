export const getName = worker => `${worker.name.first} ${worker.name.last}`
export const goNext = (idx, workers_length) => (idx + 1 < workers_length ? idx + 1 : null)
export const getCurrentWorker = state => (state.index !== null ? state.workers[state.index] : null)
export const updateLiked = (liked, id) => worker =>
  worker._id === id
    ? {
        ...worker,
        liked: true,
      }
    : worker
