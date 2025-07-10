/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

//2 restaurantes
interface Hamburguer {
    prepare(): void;
}

interface Drink {
    pour(): void;
} 

class ChickenHamburguer implements Hamburguer{
    prepare(): void {
      console.log('preprando hamburguesa de pollo')
    }
}

class BeefHamburguer implements Hamburguer{
    prepare(): void {
      console.log('preprando hamburguesa de res')
    }
}

class Water implements Drink {
    pour(): void {
      console.log('sirviendo un vaso de agua')
    }
}

class Soda implements Drink {
    pour(): void {
      console.log('sirviendo un vaso de Soda')
    }
}

//fabricas
interface RestaurantFactory {
    createHambuerguer(): Hamburguer;
    createDrink(): Drink;
}

//familia de elementos en comun
class FastFoodRestaurantFactory implements RestaurantFactory {
    createDrink(): Drink {
        return new Soda()
    }

    createHambuerguer(): Hamburguer {
        return new BeefHamburguer();
    }
}

//familia de elementos en comun
class HealthyFoodRestaurantFactory implements RestaurantFactory {
    createDrink(): Drink {
        return new Water()
    }

    createHambuerguer(): Hamburguer {
        return new ChickenHamburguer();
    }
}

//utilización
function main(factory: RestaurantFactory) {
    const hamburguer = factory.createHambuerguer()
    const drink = factory.createDrink()

    hamburguer.prepare();
    drink.pour();
}


main(new FastFoodRestaurantFactory())
main(new HealthyFoodRestaurantFactory())

