from eletrodomesticos import Eletrodomestico


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.ventilador = None

    def comprar(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.ventilador = liquidificador

    def __str__(self):
        if (self.ventilador):
            return f"{self.nome} - possui um ventilador."
        return f"{self.nome} - não possui um ventilador."


class Liquidificador(Eletrodomestico):
    pass


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

print(pessoa)