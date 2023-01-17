/*5.3 практика
задание 1*/
let num = +prompt("Введите число");
if(isNaN(num)){
    console.log("Упс, кажется, вы ошиблись");
}else{
    if(typeof num === "number"){
        if (num%2===0){
            console.log("четное"); 
        }else{console.log("нечетное");}
    }else{
        console.log("Упс, кажется, вы ошиблись");
    }
}
