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


def int_to_str(int):
    new_str = ''
