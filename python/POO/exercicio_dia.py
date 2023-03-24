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

    def modificar_canal(self, canal):
        if 1 <= canal <= 99:
            self.canal = canal
            print(f"Você está no canal: {canal}")
        else:
            raise ValueError('O canal deve estrar entre 1 e 99')

    def ligar_desligar(self):
        self.ligada = not self.ligada
        print(f"{'Ligada' if self.ligada == True else 'Desligada'}")


tv1 = Tv(volume=99, canal=1, tamanho=32, ligada=True)

tv1.modificar_canal(95)
tv1.ligar_desligar()
tv1.ligar_desligar()
tv1.ligar_desligar()
tv1.ligar_desligar()

# tv1.aumentar_volume();
# tv1.aumentar_volume();

# tv1.diminuir_volume()
# tv1.diminuir_volume()
# tv1.diminuir_volume() 
# tv1.diminuir_volume() 

