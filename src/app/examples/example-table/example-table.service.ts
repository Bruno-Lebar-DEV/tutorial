import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class ExampleTableService {

  constructor() { }

  getTableColumns(): Array<PoTableColumn> {
    return [
      { property: 'item', label: 'Item' },
      { property: 'nome', label: 'Nome' },
      { property: 'email', label: 'Email' },
      { property: 'telefone', label: 'Telefone' }
    ];
  }

  getTableData() {
    return [
      { item: 1, nome: 'João Silva', email: 'joao.silva@example.com', telefone: '(11) 98765-4321' },
      { item: 2, nome: 'Maria Oliveira', email: 'maria.oliveira@example.com', telefone: '(21) 91234-5678' },
      { item: 3, nome: 'Carlos Santos', email: 'carlos.santos@example.com', telefone: '(31) 99876-5432' },
      { item: 4, nome: 'Ana Costa', email: 'ana.costa@example.com', telefone: '(41) 98765-1234' },
      { item: 5, nome: 'Pedro Lima', email: 'pedro.lima@example.com', telefone: '(51) 91234-8765' },
      { item: 6, nome: 'Fernanda Souza', email: 'fernanda.souza@example.com', telefone: '(61) 99876-4321' },
      { item: 7, nome: 'Ricardo Pereira', email: 'ricardo.pereira@example.com', telefone: '(71) 98765-6789' },
      { item: 8, nome: 'Juliana Mendes', email: 'juliana.mendes@example.com', telefone: '(81) 91234-5678' },
      { item: 9, nome: 'Gabriel Rocha', email: 'gabriel.rocha@example.com', telefone: '(91) 99876-5432' },
      { item: 10, nome: 'Patrícia Almeida', email: 'patricia.almeida@example.com', telefone: '(31) 98765-4321' },
      { item: 11, nome: 'Lucas Martins', email: 'lucas.martins@example.com', telefone: '(41) 91234-5678' },
      { item: 12, nome: 'Mariana Ferreira', email: 'mariana.ferreira@example.com', telefone: '(51) 99876-5432' },
      { item: 13, nome: 'André Barbosa', email: 'andre.barbosa@example.com', telefone: '(61) 98765-1234' },
      { item: 14, nome: 'Renata Lima', email: 'renata.lima@example.com', telefone: '(71) 91234-8765' },
      { item: 15, nome: 'Thiago Costa', email: 'thiago.costa@example.com', telefone: '(81) 99876-4321' },
      { item: 16, nome: 'Camila Ribeiro', email: 'camila.ribeiro@example.com', telefone: '(91) 98765-6789' },
      { item: 17, nome: 'Eduardo Nunes', email: 'eduardo.nunes@example.com', telefone: '(31) 91234-5678' },
      { item: 18, nome: 'Beatriz Carvalho', email: 'beatriz.carvalho@example.com', telefone: '(41) 99876-5432' },
      { item: 19, nome: 'Felipe Gomes', email: 'felipe.gomes@example.com', telefone: '(51) 98765-4321' },
      { item: 20, nome: 'Larissa Silva', email: 'larissa.silva@example.com', telefone: '(61) 91234-5678' },
      { item: 21, nome: 'Rafael Teixeira', email: 'rafael.teixeira@example.com', telefone: '(71) 99876-5432' },
      { item: 22, nome: 'Vanessa Monteiro', email: 'vanessa.monteiro@example.com', telefone: '(81) 98765-1234' },
      { item: 23, nome: 'Bruno Almeida', email: 'bruno.almeida@example.com', telefone: '(91) 91234-8765' },
      { item: 24, nome: 'Isabela Santos', email: 'isabela.santos@example.com', telefone: '(31) 99876-4321' },
      { item: 25, nome: 'Gustavo Araújo', email: 'gustavo.araujo@example.com', telefone: '(41) 98765-6789' },
      { item: 26, nome: 'Sofia Mendes', email: 'sofia.mendes@example.com', telefone: '(51) 91234-5678' },
      { item: 27, nome: 'Diego Oliveira', email: 'diego.oliveira@example.com', telefone: '(61) 99876-5432' },
      { item: 28, nome: 'Carolina Martins', email: 'carolina.martins@example.com', telefone: '(71) 98765-4321' },
      { item: 29, nome: 'Leonardo Lima', email: 'leonardo.lima@example.com', telefone: '(81) 91234-5678' },
      { item: 30, nome: 'Aline Rocha', email: 'aline.rocha@example.com', telefone: '(91) 99876-5432' }
    ];
  }
}
