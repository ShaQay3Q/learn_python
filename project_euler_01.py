# ====================
#   Loop-Based
# ====================

def is_divisible_by_three(number):
    if number % 3 == 0:
        return number

def is_divisible_by_five(number):
    if number % 5 == 0:
        return number

def is_divisible_by_fifteen(number):
    if number % 15 == 0:
        return number

# is_divisible_by_three(6)
# is_divisible_by_five(20)
# is_divisible_by_fifteen(30)

def is_divisible_by_three_and_five(number):
    # if is_divisible_by_fifteen(number):
    #     return number
    if is_divisible_by_five(number):
        return number
    if is_divisible_by_three(number):
        return number


def sum_of_the_divisible_numbers_to_five_and_three(number):
    result = 0
    for i in range(1, number):
        if is_divisible_by_three_and_five(i):
            result = result + i
    return result

# result = is_divisible_by_three_and_five(30)
# print(is_divisible_by_three_and_five(30))
# print(sum_of_the_divisible_numbers_to_five_and_three(1000))


# --------------------------
#    ALTERNATIVE SOLUTION
# --------------------------

def is_divisible(number, divisor):
    return number % divisor == 0

def is_div_fiveandthree(number):
    return(
        # is_divisible(number, 15)
        is_divisible (number, 5)
        or is_divisible(number, 3)
    )

def sum_divisible_numbers(number):
    result = 0
    for i in range(1, number):
        if is_div_fiveandthree(i):
            result = result + i 
    return result

# result = sum_divisible_numbers(1000)
# print(result)

# --------------------------
#    ALTERNATIVE SOLUTION
# --------------------------

def sum_divisible_numbers(number):
    return sum(i for i in range(1, number) if is_divisible(i, 3) or is_divisible(i, 5))

# result = sum_divisible_numbers(10000)
# print(result)

# --------------------------
#    ALTERNATIVE SOLUTION
# --------------------------

def is_div_by_three_and_five(number):
    # div15 = number % 15 == 0
    div5 = number % 5 == 0
    div3 = number % 3 == 0

    match (div5, div3):
        case (True, _):
            return True
        case (_, True):
            return True
        # case (False, False, True):
        #     return number
        case _:
            return 0


def sum_of_the_divisible_numbers(number):
    result = 0
    for i in range(1, number):
        if is_div_by_three_and_five(i):
            result = result + i
    return result

# result = sum_of_the_divisible_numbers(1000)
# print(result)


# --------------------------
#    ALTERNATIVE SOLUTION
# --------------------------

def is_div_by_five_and_three(number):
    # if number % 15 == 0:
    #     return number
    if number % 5 == 0:
        return number
    elif number % 3 == 0:
        return number
    else:
        return 0

def sum_divisible_numbers(number):
    result = 0
    for i in range(1, number):
        if is_div_by_three_and_five(i):
            result = result + i
    return result

# result = sum_divisible_numbers(100)
# print(result)


# ========================================
#   None Loop-Based - Arithmetic Series
# ========================================

def arithmetic_sum(d, number):
    m = (number - 1) // d
    return d * m * (m + 1) // 2

def sum_div_numbers(number):
    return(
        arithmetic_sum(3, number)
        +
        arithmetic_sum(5, number)
        -
        arithmetic_sum(15, number)
    )

# number = 100000000
# number = 13195
number = 100

print(sum_div_numbers(number))

print(sum_divisible_numbers(number))