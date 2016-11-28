module.exports = {
isPrime: function isPrime(number) {
   for(var i = 2; i < number; i++){ 
       if(number % i === 0) {
           return false;
       }
   }
   return true;
},
getPrimes: function (n){
 var prime=[];
 for(var i = 2; i <= n; i++){
   if (this.isPrime(i))
     prime.push(i);
  }
  return prime
}

}