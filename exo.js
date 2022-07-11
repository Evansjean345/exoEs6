/* exercice 1
retourne le nombre de voyelle (count) dans la chaine donnée
nous considerons (a,e,i,o,u) mais pas (y)
la chaine d'entrée se composera uniquement de lettre minuscule et/ou d'espaces
*/
var counter = 0
function getCount(str) {
    str=''
    str.split('').forEach((str) => {
        if(str =="e" || str=="o" || str=="i" || str == 'u' || str =="a"){
            counter ++ 
        }
    });
    return counter
}
console.log(counter);

getCount("kello word")


/*exercice 2
creer une fuction qui prend en parametre un nombbre 
s'il est pair je retourne Even s'il est impair je 
retourne Odd */

function even_or_odd(number) {
    if (number % 2  == 0){
      return "Even"
    }else{
      (number % 2 !== 0)
      return "Odd"
    }
  }
  

console.log(even_or_odd(2));


const opposite = (number) => {
  return alert(- number)
}

console.log(opposite(5));


/*exercice 3 
renvoyer le caractere du mileiu d'un mot donné d'un mot donné si 
si sa longuer du mot est paire renvoi le carcatere du milieu 
si sa longueur est paire renvoi les 2 caracteres du milieu */



const getMiddle = (str) =>  {
        if (str.lenght % 2 === 0){
            return str.lenght === 2 
            ? str 
            : `${str.chartAt(str.lenght / 2 - 1)}
            ${str.chartAt(str.lenght / 2)}`
        }else{
            return str.lenght === 1 
            ? str :
            str.chartAt(str.lenght/ 2) 
        }
}
console.log(getMiddle("hello world"))


/*exercice 4 
rtourner l'oppsé  d'un nombre donné*/

