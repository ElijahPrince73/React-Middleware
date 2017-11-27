
export default function ({ dispatch }) {
  // Returns a function then returns another function
  return next => action => {
    console.log('action', action);
    
    next(action)
  }
}
