/*
 * Exemplo de código ruim que viola o princípio de
 * Segregação de Interfaces (Interface Segregation Principle)
 * do SOLID. Uma única interface obriga classes a implementar
 * métodos que não são necessários para a classe.
 */

// interface IMultiFunctionDevice {
//   print(document: string): void;
//   scan(document: string): void;
//   fax(document: string): void;
// }

interface IPrinter {
  print(document: string): void;
}

interface IScanner {
  scan(document: string): void;
}

interface IFax {
  fax(document: string): void;
}

const simplePrinter: IPrinter = {
  print: (document: string) => console.log('Imprimindo: ' + document),
};

const simpleScanner: IScanner = {
  scan: (document: string) => console.log('Escaneando: ' + document),
};

const simpleFax: IFax = {
  fax: (document: string) => console.log('Enviando fax: ' + document),
};

const simpleMultiFunctionDevice: IPrinter & IScanner & IFax = {
  ...simplePrinter,
  ...simpleScanner,
  ...simpleFax,
};

// Exemplo de uso
simplePrinter.print('Relatório de Vendas');
simpleScanner.scan('Relatório de Vendas');
simpleFax.fax('Relatório de Vendas');

// class SimplePrinter implements IMultiFunctionDevice {
//   print(document: string): void {
//     console.log('Imprimindo: ' + document);
//   }

//   scan(document: string): void {
//     // Este método não é necessário para uma impressora simples,
//     // mas deve ser implementado por causa da interface.
//     throw new Error('Scanner não suportado.');
//   }

//   fax(document: string): void {
//     // Este método não é necessário para uma impressora simples,
//     // mas deve ser implementado por causa da interface.
//     throw new Error('Fax não suportado.');
//   }
// }

// Exemplo de uso
// const printer: IMultiFunctionDevice = new SimplePrinter();
// printer.print('Relatório de Vendas');

// try {
//   printer.scan('Relatório de Vendas');
// } catch (error) {
//   console.error(error);
// }