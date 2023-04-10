

const cats =    ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(`${name}`)
}

function destructivelyPrependCat(name){
    cats.unshift(`${name}`)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(catName){
    const newArray =[...cats,`${catName}`]
    return newArray
}

function prependCat(catName){
    const newArray =[`${catName}`,...cats]
    return newArray
}

function removeLastCat(){
    const newArray = cats.slice(0,-1)
    return newArray
}

function removeFirstCat(){
    const newArray = cats.slice(1,3)
    return newArray
}
console.log(removeFirstCat())