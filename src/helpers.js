export function createData(data){
  let theArray = [];
  for(let dataItem of data){
    let map = {};
    map.name = dataItem.name;
    if(dataItem.style.hasOwnProperty("ibuMax")){
    map.ibu = parseInt(dataItem.style.ibuMax);
  } else {
    map.ibu = 0;
  }
     if(dataItem.style.hasOwnProperty("abvMax")){
    map.abv = parseInt(dataItem.style.abvMax);
  } else {
    map.abv = 0;
  }
    map.category = dataItem.style.category.name;
    theArray.push(map);
  }
  return theArray;
}
