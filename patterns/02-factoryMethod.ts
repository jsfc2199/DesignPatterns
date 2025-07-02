/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

interface IHamburger {
  prepare(): void; //para preparar la hamburguesa
}

//2 tipos de hamburguesas
class ChickenHamburger implements IHamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de pollo");
  }
}

class BeefHamburger implements IHamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de carne");
  }
}

//Ahora queremos crear un  restaurante que entregue ambas hamburguesas
//Es abstracta porque no me interesa hacer un new Restaurant, pero sirve para definir el esqueleto de otras clases
abstract class Restaurant {
  abstract createHamburger(): IHamburger;

  //no importa el restaurante debe de crear la hamburguesa
  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  override createHamburger(): IHamburger {
    return new ChickenHamburger();
  }
}

class BeefRestaurant extends Restaurant {
  override createHamburger(): IHamburger {
    return new BeefHamburger();
  }
}
