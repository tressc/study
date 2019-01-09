# def is_palindrome(str):
#     return all(str[i] == str[-(i + 1)] for i in range(len(str) // 2))

def is_palindrome(str):
    for i in range(len(str) // 2):
        if str[i] != str[-(i + 1)]:
            return False
    return True

boolean = is_palindrome("racecar")
print(boolean)
