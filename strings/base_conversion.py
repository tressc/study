import functools

def base_conversion(num_as_string, b1, b2):
    hexadigits = "0123456789ABCDEH"

    def construct_from_base(num_as_int, base):
        if num_as_int == 0:
            return ''
        else:
            return construct_from_base(num_as_int // base, base) + hexadigits[num_as_int % base]

    is_negative = num_as_string[0] == "-" #boolean

    num_as_int = functools.reduce( # converts str to base 10 int
        lambda acc, digit:
        acc * b1 + hexadigits.index(digit),
        num_as_string[is_negative:], # if is negative 1: else 0:
        0
    )

    if is_negative:
        return "-" + construct_from_base(num_as_int, b2)
    else:
        return construct_from_base(num_as_int, b2)

# str_as_num = "-1111"
# is_negative = str_as_num[0] == '-' #boolean
# hexadigits = "0123456789ABCDEH"
# num = functools.reduce(lambda acc, digit: acc * 2 + hexadigits.index(digit), str_as_num[is_negative:], 0)
#
print(base_conversion("-1111", 2, 10))
