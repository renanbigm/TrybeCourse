class Soldier:
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 1


class Jedi:
    def __init__(self, level):
        self.level = level

    def attackWithSaber(self):
        return self.level * 100


class StarWarsGame:
    def __init__(self, character):
        self.character = character

    def fight_enemy(self):
        if isinstance(self.character, Soldier):
            damage = self.character.attack()
        elif isinstance(self.character, Jedi):
            damage = self.character.attackWithSaber()

        print(f"You caused {damage} of damage to the enemy")


StarWarsGame(Soldier(5)).fight_enemy()
StarWarsGame(Jedi(20)).fight_enemy()
