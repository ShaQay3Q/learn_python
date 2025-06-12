n = 13


def is_prime(number):
    prime = True
    for i in range(2, n):
        if n % i == 0:
            prime = False
    if prime:
        print(n, "is prime.")
    else:
        print(n, "is not prime.")


is_prime(n)