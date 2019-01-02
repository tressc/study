def swap_bits(x, i, j):
    if (x >> i) & 1 != (x >> j) & 1:
        bit_mask = (1 << i) | (1 << j)
        x ^= bit_mask
    return x

# print(swap_bits(73, 1, 6))


# precomputed_reverse = [0, 2, 1, 3]
#
# def reverse_bits(x):
#     mask_size = 16
#     bit_mask = 0xFFFF # 65536 or 10000000000000000
#     return (precomputed_reverse[x & bit_mask] << (3 * mask_size)
#             | precomputed_reverse[(x >> mask_size) & bit_mask] <<
#             (2 * mask_size) |
#
# )
