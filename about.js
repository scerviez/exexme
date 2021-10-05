const fs = require('fs')

function Hi() {
  let me = fs.readFileSync('aboutme.json');
  let about = JSON.parse(me);
  console.log(about)
}
  
Hi()
console.log('thank you for visiting my github profile!. Byeee')