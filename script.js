function firstWord(s) {
  // your code here
  s=s.trim();
  let fsi=s.indexOf(' ');
  if(fsi===-1)
    return s;
  return s.substring(0.fsi);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
