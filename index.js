function takeANumber(line, name){
line.push(name)
return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length==0){
    return ("There is nobody waiting to be served!")
  }
  else {
    retun (`We are currently ${katzDeliLine.shift()}.`)
  }
}
