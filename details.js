let details = {
    sex: "male",
    first_name: "eromo",
    last_name: "ujay",
    getFullName: function boy (anotherFunction){
        console.log(anotherFunction(this))
    }
}

let boy = function (){
    console.log(this)
}
details.getFullName(boy(obj))//((obj) => {
//      let fullname = obj.first_name + " " + obj.last_name
//      if (obj.sex === "male"){
//          fullname = "Mr" + " " + fullname}
//      else{
//          fullname = "Mrs" + " " + fullname
//      }
//      return fullname})
//console.log(details.getFullName)
