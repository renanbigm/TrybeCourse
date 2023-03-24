from dataclasses import dataclass


@dataclass
class Tv:
    volume: int = 50
    canal: int = 1
    tamanho: int = None
    ligada: bool = False

    def aumentar_volume(self):
        print(self.volume)
        if self.volume < 99:
            self.volume += 1
        else:
            print('Volume está no máximo')
        print(self.volume)

    def diminuir_volume(self):
        pass

    def modificar_canal(self):
        pass

    def ligar_desligar(self):
        pass


tv1 = Tv(volume=50, canal=1, tamanho=32, ligada=True)

tv1.aumentar_volume()
tv1.aumentar_volume() 
tv1.aumentar_volume() 
tv1.aumentar_volume() 
tv1.aumentar_volume() 
tv1.aumentar_volume() 
tv1.aumentar_volume() 
