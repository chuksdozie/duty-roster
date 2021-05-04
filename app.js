const parentArray = [2,4,6,8,10,12,14]
let scheduleArray = []

but = document.querySelector(".mybut")


function aaa(){
    if (scheduleArray.length == 0){
        scheduleArray = parentArray
        console.log("hh",scheduleArray)
        for (var i = 0; i in scheduleArray; i++){
            callItem()
         }
    }else{
       
        
        console.log(scheduleArray)
        
        console.log("today",presArray[0])
        console.log("tomorrow",presArray[1])
        console.log("2 days time",presArray[2])
        presArray.shift()
        console.log(presArray)
        if (presArray.length < 6){
            console.log("ggg")
            callItem()
        }
        
    }
}
var randomelement

let presArray = []
presArray = scheduleArray
console.log("2",presArray)

function callItem(){
        randomelement = scheduleArray[Math.floor(Math.random()*scheduleArray.length)]
        if (presArray.includes(randomelement)){
            callItem()
        }else{
            presArray.push(randomelement)
            console.log("j",presArray)
        }
        
        
    }

but.addEventListener("click", aaa)

a = [1,2,"3"]
console.log(a.includes(3))

console.log(presArray)

function isittime(){

    let my = new Date()
    let myy
    // console.log(my.toLocaleTimeString())
    if ((my.getHours() == 9) && (my.getMinutes()==43) && (my.getSeconds()<2) && (my.getDay() != 0) && (my.getDay() != 6) ) {
        // myy=setInterval(aaa,1000)
        aaa()
        console.log("done for today") 
    }
    if (my.getDay == 1){
        console.log("Monday")
    }
    
}
setInterval(isittime,1000)