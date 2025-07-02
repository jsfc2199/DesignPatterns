/**
 * 	!Descripción:
  1.	Completen las clases SalesReport e InventoryReport para implementar 
      la interfaz Report, generando el contenido de cada reporte en el método generate.
	  
  2.	Implementen las clases SalesReportFactory e InventoryReportFactory 
      para crear instancias de SalesReport y InventoryReport, respectivamente.

	3.	Prueben el programa generando diferentes tipos de reportes usando
      el prompt para seleccionar el tipo de reporte.
 */

// 1. Definir la interfaz Report
interface Reporte {
  generate(): void;
}

// 2. Clases concretas de Reportes
// Implementar SalesReport e InventoryReport

class SalesReport implements Reporte {
  generate(): void {
    console.log("Generando reporte de ventas...");
  }
}

class InventoryReport implements Reporte {
  generate(): void {
    console.log("Generando reporte de inventario...");
  }
}

// 3. Clase Base ReportFactory con el Método Factory

abstract class ReportFactory {
  abstract createReport(): Reporte;

  generateReport(): void {
    const report = this.createReport();
    report.generate();
  }
}

// 4. Clases Concretas de Fábricas de Reportes

class SalesReportFactory extends ReportFactory {
  override createReport(): Reporte {
    return new SalesReport();
  }
}

class InventoryReportFactory extends ReportFactory {
  override createReport(): Reporte {
    return new InventoryReport();
  }
}

// 5. Código Cliente para Probar

function main() {
  let reportFactory: ReportFactory;

  const reportType = prompt("¿Qué tipo de reporte deseas? %c(sales/inventory)");

  if (reportType === "sales") {
    reportFactory = new SalesReportFactory();
  } else {
    reportFactory = new InventoryReportFactory();
  }

  reportFactory.generateReport();
}

main();
