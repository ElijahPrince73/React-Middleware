
export default function ({ dispatch }) {
  // Returns a function then returns another function
  return next => action => {
    // If the action does not have a .then property
    // We dont care about it send it on
    if (!action.payload || !action.payload.then) {
      return next()
    }

    console.log('We have a promise', action);
  }
}
