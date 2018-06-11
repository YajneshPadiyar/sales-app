

export const onInputChange=(action)=>{
  console.log(action);
  return {
    type: action.type,
    VALUE: action.value
  }
}
