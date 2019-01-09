# O(n) memory and 0(n * k) time where k = arr.max

def can_win(arr):
    bool_arr = [False] * len(arr)
    for i in reversed(range(len(arr))):
        for j in reversed(range(arr[i])):
            k = j + 1
            if i + k >= len(arr) - 1 or bool_arr[i + k]:
                bool_arr[i] = True
                break
    return bool_arr[0]

# print(can_win([3, 0, 0, 1, 3]))


# O(1) memory and O(n) time

def can_win2(arr):
    farthest = 0
    last = len(arr) - 1
    i = 0
    while i <= farthest and farthest < last:
        farthest = max(farthest, arr[i] + i)
        i += 1
    return farthest >= last

print(can_win2([2, 0, 1, 3]))
