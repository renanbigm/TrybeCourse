def get_biggest(a, b):
    if a > b:
        return a
    else:
        return b


# print(get_biggest(255, 10))

numbers = list(range(1, 11))


def get_list_average(list):
    length = len(list)
    total_sum = 0
    for n in list:
        total_sum += n
    return total_sum / length


# print(get_list_average(numbers))

def show_asteriscs(n):
    for row in range(n):
        print(n * '*')


print(show_asteriscs(10))
