const obj = {
     firstname : "vinisha",
     secondname : "sudevan",
     graduated : false,
     joining_date :new  Date("07/30/25"),
     no_of_days : ()=>{
        let current_date = new Date()
        return obj.current_date-joining_date
     }

}
console.log(obj.firstname+obj.secondname)
let {
    firstname , secondname , graduated,  joining_date, no_of_days ,current_date}=obj
    console.log()

