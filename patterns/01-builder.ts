/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

//definiremos el como crear un computador
class Computer {
  public cpu: string = "cpu - not defined";
  public ram: string = "ram - not defined";
  public storage: string = "storage - not defined";
  public gpu?: string;

  displayConfig() {
    console.log(`Configuración de la computadora
                CPU: ${this.cpu}
                Ram: ${this.ram}
                storage: ${this.storage}
                gpu: ${this.gpu}
            `);
  }
}

//clase que hará el builder
class ComputerBuilder {
  //tipamos como un objeto que lucirá a Computer
  private computer: Computer;

  constructor() {
    this.computer = new Computer(); //instanciamos el objeto. Siempre que inicialice ComputerBuilder, tendré un Computer limpio (no definido)
  }

  //La clave es que setCpu devuelve una instancia de ComputerBuilder
  setCpu(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;

    //retornamos la instancia de ComputerBuilder
    return this;
  }

  setRam(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGpu(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  //se encargará de construir la computadora
  build(){
    return this.computer;
  }
}

//! Utilización
function main(){
    //como retornamos el this en todos los métodos, los podemos concatenar en la definición de lo que queremos buildear
    //Si quitamos el build, estaremos teniendo una instancia de ComputerBuilder, si lo colocamos ya será una instancia de Computer
    const basicComputer = 
        new ComputerBuilder()
        .setCpu('ryzen')
        .setRam('teamgroup')
        .build();

    basicComputer.displayConfig()

    const gamerComputer = 
        new ComputerBuilder()
        .setCpu('ryzen')
        .setRam('CORSAIR')
        .setStorage('1tb')
        .build();

    gamerComputer.displayConfig()

}

main()
