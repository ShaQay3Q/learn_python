n = 13


def is_prime(number):
    prime = True
    for i in range(2, number):
        if number % i == 0:
            prime = False
    return prime

for i in range(1, 10):
    print(i, is_prime(i))

# if prime:
#     print(n, "is prime.")
# else:
#     print(n, "is not prime.")


print(is_prime(6))