def str_to_int(str):
    total = 0
    digits = "0123456789"
    for i in reversed(range(len(str))):
        power = len(str) - i - 1
        total += digits.index(str[i]) * 10 ** power
        # normally we would just use int(str[i]), but if we can use int
        # then there's no real reason to write this problem at all
    return total

print(str_to_int("12345"))


def int_to_str(x):
    new_str = ''
    digits = "0123456789"
    is_negative = False

    if x < 0:
        x = -x
        is_negative = True

    while x > 0:
        new_str = digits[x % 10] + new_str
        x //= 10

    if is_negative:
        new_str = "-" + new_str

    return new_str

print(int_to_str(-2303))
