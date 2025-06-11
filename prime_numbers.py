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
print(find_primes(range(100)))