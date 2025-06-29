n = 13


def is_prime(number):
    prime = True
    for i in range(2, number):
        if number % i == 0:
            prime = False
    return prime

count = 0
for i in range(1, 1001):
    if is_prime(i):
        count = count + 1
        print(i)
    
print(count)

# if prime:
#     print(n, "is prime.")
# else:
#     print(n, "is not prime.")

