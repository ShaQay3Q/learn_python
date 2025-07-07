def is_divisible(num1, num2):
    if num1 % num2 == 0:
        return True

def is_prime(number):
    divisible_count = []
    for i in range(number, 0, -1):
        if is_divisible(number, i):
            divisible_count.append(True)
    if len(divisible_count) < 3:
        return True

def find_primes(numbers):
    primes = []
    for n in numbers:
        if n != 0:
            if is_prime(n):
                primes.append(n)
    return primes
# range(1, 1001)
# number = 100
number = 13195
# print(find_primes(range(number)))

prime_factors = []

def find_a_prime(numbers):

    # primes = []
    for n in range(1, numbers):
        if n != 1:
            if is_prime(n):
                if numbers % n == 0:
                    prime_factors.append(n)
                    return int(abs(number / n))
    
    # return primes

print(find_a_prime(number))

print(prime_factors)