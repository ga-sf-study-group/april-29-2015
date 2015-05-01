function next_prime_gen() {

    var latest_prime = 1;
    function seive(n, base_sieve) {
        var numbers = base_sieve || new Array(n) ;
        if(!base_sieve) {
            for(var i=0; i < numbers.length; i++) {
                numbers[i] = true;
            }
        }else{
            n = 2*base_sieve.length;
            for(var i=base_sieve.length; i < n; i++) {

                numbers[i] = true;
            }
        }

        for(var i=2; i < Math.sqrt(n); i++) {
            if(numbers[i]) {
                for(var j = i*i; j < n; j += i) {
                    numbers[j] = false;
                }
            }
        }
        return numbers;
    }
    var sieve_data = seive(20);

    return function next() {
        var i = latest_prime + 1;
        while(sieve_data[i] != true) {
            if(i >= sieve_data.length-2) {
                sieve_data = seive(i, sieve_data);

            }
            i++;
        }
        latest_prime = i;
        return i;
    }
}

var next = next_prime_gen();
console.log(next());
console.log(next());
console.log(next());
console.log(next());
