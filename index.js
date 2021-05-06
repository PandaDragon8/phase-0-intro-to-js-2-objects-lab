// Write your solution in this file!
const employee = {}

function updateEmployeeWithKeyAndValue(e , k, v){
    return Object.assign({}, e, { [k]: v });
}

function destructivelyUpdateEmployeeWithKeyAndValue(e , k, v){
    e[k] = v
    return e}

function deleteFromEmployeeByKey(e, k) {
const copy = Object.assign({}, e)
delete copy [k]
return copy
}

function destructivelyDeleteFromEmployeeByKey(e, k){
    delete e[k]
    return e    
}