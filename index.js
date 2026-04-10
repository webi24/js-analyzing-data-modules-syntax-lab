require('datejs')

function combineUsers(...args) {
  let combinedObject = {
    users: []
  }

  for (let array of args) {
    combinedObject.users = [...combinedObject.users, ...array]
  }

  combinedObject.merge_date = new Date().toString('M/d/yyyy')

  return combinedObject
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};