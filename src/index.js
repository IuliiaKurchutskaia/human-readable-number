module.exports =  function toReadable (number) {
    const value = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
      };


    let n3= Math.floor(number/100);
   
    
    let  n2=Math.floor((number - n3 * 100) / 10);

    let n1=(number-100)%10;


    if(number>=100){
  if(n1==0){
    if(value[n3]!="zero"&&value[n2]!="zero"){
    return value[n3]+" "+"hundred"+" "+value[n2*10];
    }

     
   }
 if(n2==1){
    n4=10+n1
    if(value[n3]!="zero"&&value[n1]!="zero"){
    return value[n3]+" "+"hundred"+" "+value[n4];
    }
 }
 if(n2==0&&n1!=0){
     
        return value[n3]+" "+"hundred"+" "+value[n1];

 }

 if(value[n2]=="zero"&&value[n1]=="zero"){
    return value[n3]+" "+"hundred";
}

 if(number%100==0){
    return value[n3]+" "+"hundred";
 }

 if(value[n2]=="zero"&&value[n1]=="zero"){
    return value[n3]+" "+"hundred";
}

if(value[n2]!="zero"&&value[n1]!="zero"){
return value[n3]+" "+"hundred"+" "+value[n2*10]+" "+value[n1];
}
    }


if(number<=20){
    return value[number];}


if(21<=number<100){
    n1=number%10;
    n2=Math.floor(number/10);
    if(number%10==0){
        return value[number];
       }
    return value[n2*10]+" "+value[n1];
 
}
}