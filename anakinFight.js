let anakinAttack = 25
let anakinHealth = 100
let anakinDef = 0

let obiwanAttack = 35

if(anakinAttack > obiwanAttack){
  console.log('Anikin is stronger')
}else if(obiwanAttack > anakinAttack){
  console.log('Obiwan is stronger')
}else {
  console.log('the force is with them both')
}

if (anakinHealth <= 0){
  console.log('he dead')
}else{
  anakinHealth -= obiwanAttack
  console.log(`anikin health is now, ${anakinHealth}`)
}

anakinDef += 25

if(anakinHealth <= obiwanAttack - anakinDef){
  console.log('Anakin has fallen')
}else {
  anakinHealth -= obiwanAttack - anakinDef
  console.log(`anikin health is now, ${anakinHealth}`)
}

if(anakinHealth + 50 >= 100){
  anakinHealth = 100
  console.log(`anakin takes a medpack ${anakinHealth}`)
}else {
  anakinHealth += 50 
  console.log(anakinHealth)
}

for(let i = 0; i > 5; i++){
anakinHealth -= obiwanAttack - anakinDef
  console.log(`anikin health is now, ${anakinHealth}`)
}

while(anakinHealth > 0){
  anakinHealth -= obiwanAttack - anakinDef
  console.log(`anikin health is now, ${anakinHealth}`)
  
}
