let a = [2,3,1]
let b = [2,9,5,3]
let mergeArray= function (c,d){
    let count = 0
    newArray = []
    for(let i = 0; i < c.length; i++){
        if(newArray.includes(c[i]) === false)
        newArray[count++] = c[i];
    }
    for (let j = 0; j < d.length; j++)
        if(newArray.includes(d[j]) === false)
            newArray[count++] = d[j]
    return newArray
}

let ascendingSortedArray = function (array){
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++)
            if(array[i] > array[j]){
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
    }
    return array
}

let descendingSortedArray= function (array){
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++)
            if(array[i] < array[j]){
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
    }
    return array
}

let aArray = function (b,c){
    let stringArray = []
    let numberArray = []
    let booleanArray = []
    let globalArray = []

    for(let i = 0; i < b.length; i++){
        if (typeof b[i] === 'string')
            stringArray.push(b[i])
        if (typeof b[i] === 'number')
            numberArray.push(b[i])
        if (typeof b[i] === 'boolean')
            booleanArray.push(b[i])
    }

    for(let i = 0; i < c.length; i++){
        if (typeof c[i] === 'string')
            stringArray.push(b[i])
        if (typeof c[i] === 'number')
            numberArray.push(b[i])
        if (typeof c[i] === 'boolean')
            booleanArray.push(b[i])
    }
    globalArray.push(numberArray)
    globalArray.push(stringArray)
    globalArray.push(booleanArray)
    return globalArray
}

let array1 = ["a",1, true]
let array2 = ["b",2,false]

let array = [
    {id: 3,
    firstname: "Saheed",
    lastname: "Adesuwa"},

    {
        id: 2,
        firstname: "Yetunde",
        lastname: "Ahmad"
    },
    {
        id: 1,
        firstname: "Goodnews",
        lastname: "Confidence"
    },

    {
        id: 4,
        firstname: "Gideon",
        lastname: "Mojoyin"
    }
]

let ascendingArrayObject = function (array){
    for(let i = 0; i < array.length; i ++){
        for(let j = i+1; j < array.length; j++){
            if(array[i].id > array[j].id){
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}

let descendingArrayObject = function(array){
    for(let i = 0; i < array.length; i ++){
        for(let j = i+1; j < array.length; j++){
            if(array[i].id < array[j].id){
                temp = array[i]
                array[i] = array[j]
                array[j] = temp }
        }
    }
    return array
}


//console.log(mergeArray(a,b))
//console.log(ascendingSortedArray(mergeArray(a,b)))
//console.log(descendingSortedArray(mergeArray(a,b)))
//console.log(aArray(array1,array2))
//console.log(ascendingArrayObject(array))
//console.log(descendingArrayObject(array))