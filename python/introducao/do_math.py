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


# print(show_asteriscs(10))

names_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def show_biggest_name(names):
    bigger_name = ''
    for name in names:
        if len(name) > len(bigger_name):
            bigger_name = name
    return bigger_name


print(show_biggest_name(names_list))


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


print(paint_costs(10))
