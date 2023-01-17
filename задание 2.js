
/*5.3 практика
задание 2*/
let result;
switch typeof(result) {
    case "number":
        console.log('x — число');
        break;
    case "string":
        console.log('x-строка');
        break;
    case "boolean":
        console.log('x-логический тип');
        break;
    default:
        console.log('результат не определен');
}

/*вариант 2*/

let x;
if(typeof x == "number"){
        console.log('x — число'); 
    }else if(typeof result == "string"){
        console.log('x-строка');
    }else if(typeof result == "boolean"){
    console.log('x-логический тип');
    }else{
        console.log('результат не определен');
}
