const kesult = document.querySelector('#input')
const num = document.querySelectorAll('.num')
const equal = document.querySelector('.equal')
const bs = document.querySelector('.bs')
const ac = document.querySelector('.ac')

let clear = ()=>{
  result.value = ""
}

num.forEach((val)=>{
  val.addEventListener('click', (x)=>{
    if(x.target.innerHTML == '='){
      let ans = eval(result.value)
      console.log(typeof ans)
      let anS = ans.toString()
      result.value = anS
      
    }
   else if(x.target.innerHTML == 'BS'){
     result.value = result.value.slice(0, -1)
   }
    else{
      result.value += x.target.innerHTML
    }
  })
})

ac.addEventListener('click', clear)