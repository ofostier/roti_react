export default function getTagsList(data) {
  //console.log(data);

  const list = data.votes.map((value) => value.comment.split(" "));

  let arr = list.join().split(",");
  
  let counts = {}

  for(let i =0; i < arr.length; i++){ 
    if (counts[arr[i]]){
    counts[arr[i]] += 1
    } else {
    counts[arr[i]] = 1
    }
  }  
  // for (let prop in counts){
  //     if (counts[prop] >= 2){
  //         console.log(prop + " counted: " + counts[prop] + " times.")
  //     }
  // }

  const final= [];
  for (let prop in counts){
    final.push({'value':prop, 'count':counts[prop]});
  }

  //console.log(final);
  return final;
}