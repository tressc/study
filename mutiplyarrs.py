def multiply_arrs(arr1, arr2):
    result = [0] * (len(arr1) + len(arr2))
    for i in reversed(range(len(arr1))):
        for j in reversed(range(len(arr2))):
            result[i + j + 1] += (arr1[i] * arr2[j])
            result[i + j] += result[i + j + 1] // 10
            result[i + j + 1] %= 10
    while result[0] == 0:
        result.pop(0)
    return result

arr1 = [9, 8, 9]
arr2 = [9, 9, 7, 8]

print(multiply_arrs(arr1, arr2))
