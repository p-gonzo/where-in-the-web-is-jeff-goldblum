var updateCount = (count) => (

  {
    type: 'UPDATE_COUNT',
    clickCount: ++count
  }
)


export default updateCount;