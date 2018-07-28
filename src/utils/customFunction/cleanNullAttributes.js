
export default (data) => {
  for(let key in data){
    if(data[key] === null || data[key === undefined] || data[key] === ""){
      delete data[key];
    }
  }
  return data;
}
