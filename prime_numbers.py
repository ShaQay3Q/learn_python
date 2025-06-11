def divisible(num1, num2):
    if num1 % num2 == 0:
        return True
    else:
        return False

print(divisible(4, 2))

def find_primes():
    primes = []
    for num in range(1, 1000):
        if divi