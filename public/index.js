const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const span = document.querySelector('span')


const handleMinus = ()=>{
  console.log('minus')
}
const handlePlus = ()=>{
  console.log('plus')
}

minus.addEventListener('click', handleMinus)
plus.addEventListener('click', handlePlus)

