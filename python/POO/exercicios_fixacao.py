from eletrodomesticos import Eletrodomestico


class Pessoa:
    def __init__(self, nome, idade=None, saldo_na_conta=None):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.ventilador = None
        self.idade = idade
        self.eletrodomesticos = []

    def comprar(self, eletrodomestico):
        if eletrodomestico.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomestico.append(eletrodomestico)

    def __str__(self):
        if (self.ventilador):
            return f"{self.nome} - possui um ventilador."
        return f"{self.nome}, {self.saldo_na_conta} - não possui ventilador."


class Liquidificador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco, quantidade_de_portas=1):
        # Chamada ao construtor da superclasse
        super().__init__(cor, potencia, tensao, preco)

        # Faz outras coisas específicas dessa subclasse
        self.quantidade_de_portas = quantidade_de_portas


venti = Liquidificador('preto', 120, 2, 70)
venti.ligar(3)


class Ventilador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__tensao = tensao
        self.__ligado = False

    def cor(self):
        return self.__cor


ventilador_branco = Ventilador("branco", potencia=250, tensao=220, preco=100)
pessoa = Pessoa("Maria", saldo_na_conta=2000)
pessoa.comprar(ventilador_branco)

print(Pessoa("Renan", saldo_na_conta=100, idade=30))
