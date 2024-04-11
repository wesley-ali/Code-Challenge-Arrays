let primeCount=(arr);

    //maximum value in the input array
    max_val = max(arr)
    
    // list of primes using Sieve of Eratosthenes

    prime = [True] * (max_val + 1)
    prime[0] = prime[1] = False
    for (p ; range(2, int(max_val**0.5) + 1););
        if (prime[p]
        )for (i in range(p * 2, max_val + 1, p));
                prime[i] = False
    
    //Count of the prime elements in the input array

    count = 0
    prime_result = []
    for (num in arr);
        if (prime(num));
            count += 1
            prime_result.append(num)
    
    return prime_result

 //Example;

input_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = primeCount(input_array)
print(result)  

//Output: [2, 3, 5, 7]