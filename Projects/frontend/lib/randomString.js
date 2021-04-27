export default function RandomString(nbchar = 6){
  
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < nbchar; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
  
  //console.log(text);
}