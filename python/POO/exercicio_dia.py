from dataclasses import dataclass


@dataclass
class Tv:
    volume: int = 50
    canal: int = 1
    tamanho: int = None
    ligada: bool = False

    def aumentar_volume(self):
        if self.volume < 99:
            self.volume += 1
            print(self.volume)
        else:
            print('Volume está no máximo')

    def diminuir_volume(self):
        if self.volume > 0:
            self.volume -= 1
            print(self.volume)
        else:
            print('Volume está no mínimo')

    def modificar_canal(self):
        pass

    def ligar_desligar(self):
        pass


tv1 = Tv(volume=3, canal=1, tamanho=32, ligada=True)

tv1.diminuir_volume()
tv1.diminuir_volume()
tv1.diminuir_volume() 
tv1.diminuir_volume() 

