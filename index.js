function takeANumber(line, name){
line.push(name)
return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length==0){
    return ("There is nobody waiting to be served!")
  }
  else {
    return (`We are currently ${katzDeliLine.shift()}.`)
  }
}

function currentLine(line){
  if (katzDeliLine.length==0){
    return ("The line is currently empty.")
  }
  const array =[]
  for (let x = 0; x< line.length; x++)
  array.push (`${x+1}. ${line[x]}`)
  return `The line is currently: ${array.join(", ")}`
}
