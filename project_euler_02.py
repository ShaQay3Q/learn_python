def fibonacci_even_numbers_sum(limit):
    a = 0
    b = 2
    total = 0
    while a <= limit:
       total += a
       c = b
       b = 4 * b + a
       a = c
    return total


def fibonacci_even_sum(limit):
    # Start with first even Fibonacci numbers
    a, b = 0, 2
    total = 0

    while a <= limit:
        total += a
        # Generate the next even Fibonacci number directly:
        # tuple unpacking
        a, b = b, 4 * b + a

    return total

print(fibonacci_even_sum(4000000))
print(fibonacci_even_numbers_sum(4000000))
