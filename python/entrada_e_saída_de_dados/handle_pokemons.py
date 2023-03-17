# import json  # json é um modulo que vem embutido, porém precisamos importá-lo


# with open("./entrada_e_saída_de_dados/pokemons.json") as file:
#     content = file.read()  # leitura do arquivo
#     pokemons = json.loads(content)["results"]  # o conteúdo é transformado estrutura python equivalente, dicionário neste caso.
#     # acessamos a chave results que é onde contém nossa lista de pokemons

# print(pokemons[0])  # imprime o primeiro pokemon da lista

# import json


# with open("./entrada_e_saída_de_dados/pokemons.json") as file:
#     pokemons = json.load(file)["results"]

# print(pokemons[0])  # imprime o primeiro pokemon da lista

import json

# Leitura de todos os pokemons
with open("./entrada_e_saída_de_dados/pokemons.json") as file:
    pokemons = json.load(file)["results"]

# Separamos somente os do tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

# # Abre o arquivo para escrevermos apenas o pokemons do tipo grama
# with open("grass_pokemons.json", "w") as file:
#     json_to_write = json.dumps(
#         grass_type_pokemons
#     )  # conversão de Python para o formato json (str)
#     file.write(json_to_write)


# abre o arquivo para escrita
# with open("grass_pokemons.json", "w") as file:
    # escreve no arquivo já transformando em formato json a estrutura
    # json.dump(grass_type_pokemons, file)


# def vertical_inverted_ladder(word):
#     for removed_letters in range(len(word)):
#         for index in range(len(word) - removed_letters):
#             print(word[index], end="")
#         print()

# if __name__ == "__main__":
#     name = input("Digite um nome: ")
#     vertical_inverted_ladder(name)

import random

WORDS = [
    "cat",
    "elephant",
    "dog",
    "monkey",
    "duck",
    "chameleon",
    "bear",
    "moose",
    "rooster",
]
MAX_ATTEMPTS = 3


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


def collect_guesses():
    guesses = []
    for attempt in range(MAX_ATTEMPTS):
        guess = input("Guess the word: ")
        guesses.append(guess)
    return guesses


def check_game_result(secret_word, guesses):
    if secret_word in guesses:
        print(f"You win: {secret_word}")
    else:
        print(f"You lose: {secret_word}")


if __name__ == "__main__":
    secret_word, scrambled_word = draw_secret_word(WORDS)
    print(f"Scrambled word is {scrambled_word}")
    guesses = collect_guesses()
    check_game_result(secret_word, guesses)
