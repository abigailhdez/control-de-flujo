


function businessHours(dayNumber, hourNumber){
    if(dayNumber=="sabado" || dayNumber == "domingo"){
        return false;
    }
    if( hourNumber <= 8 || hourNumber >= 18){
        return false;
    }else{
        return true;
    }
    //console.log(dayNumber, hourNumber)
}

//businessHours("lunes",(7))
console.log(businessHours("lunes",(13)))