def fizzBuzz(n):
    numbers = list(range(1, n+1))

    fizz_buzz = ['FizzBuzz' if number % 3 == 0 and number % 5 == 0 else
                 'Fizz' if number % 3 == 0 else
                 'Buzz' if number % 5 == 0 else
                 number
                 for number in numbers]
    return fizz_buzz


def test_fizzbuzz_should_return_list_of_numbers():
    assert fizzBuzz(2) == [1, 2]


def test_fizzbuzz_divisible_by_three_should_be_fizz():
    assert fizzBuzz(3)[-1] == "Fizz"


def test_fizzbuzz_divisible_by_five_should_be_buzz():
    assert fizzBuzz(5)[-1] == "Buzz"


def test_fizzbuzz_divisible_by_five_and_three_should_be_fizzbuzz():
    assert fizzBuzz(15)[-1] == "FizzBuzz"
