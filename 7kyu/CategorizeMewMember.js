function openOrSenior(data){
  let newData = [];
  data.map(elem => {
    if(elem[0] >= 55 && elem[1] > 7) {
      newData.push('Senior')
    } else [
      newData.push('Open')
    ]
      
  })
  return newData;
}