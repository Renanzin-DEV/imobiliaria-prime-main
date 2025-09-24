#  Imobiliária Prime - Formativa

Construir uma aplicação web do zero.  
A Imobiliária Prime permitirá gerenciar imóveis, clientes e corretores, possibilitando cadastro, busca e reserva de imóveis, com integração a um backend simulado via JSON Server.

---

##  Objetivos
- Criar uma plataforma para cadastro e gerenciamento de imóveis.  
- Permitir a associação de clientes a reservas de imóveis.  
- Controlar o cadastro de corretores que intermediam negociações.  
- Listar e buscar imóveis por filtros (localização, preço, tipo).  

---

##  Levantamento de Requisitos do Projeto
###  Funcionais
- Cadastro de usuários (corretores e clientes).  
- Cadastro de imóveis.  
- Listar e buscar imóveis por filtros.  
- Reservar um imóvel.  
- Cancelar reserva.  
- Editar e remover imóveis (corretor).  

###  Não Funcionais
- Interface responsiva (Angular).  
- Persistência de dados (JSON Server / db.json).  
- Escalabilidade para integração futura com banco real.  
- Facilidade de uso (UX amigável).  

---

##  Recursos do Projeto
- Angular  
- TypeScript  
- JSON Server (db.json como banco simulado)  
- VSCode  

---

### Diagramas
-    ##  Diagrama de Classes
```mermaid
classDiagram
    class Usuario {
        +String id
        +String nome
        +String email
        +String senha
        +login()
        +logout()
    }

    class Cliente {
        +String telefone
        +reservarImovel()
        +cancelarReserva()
        +buscarImovel()
    }

    class Corretor {
        +String creci
        +cadastrarImovel()
        +editarImovel()
        +gerenciarReserva()
    }

    class Imovel {
        +String id
        +String endereco
        +String tipo
        +double preco
        +String status
        +reservar()
        +cancelar()
    }

    Usuario <|-- Cliente
    Usuario <|-- Corretor
    Cliente --> Imovel : reserva
    Corretor --> Imovel : gerencia
```

-    ## Diagrama de Casos de Uso
```mermaid
usecaseDiagram
    actor Cliente
    actor Corretor

    Cliente --> (Registrar)
    Cliente --> (Login)
    Cliente --> (Buscar Imóvel)
    Cliente --> (Visualizar Imóvel)
    Cliente --> (Demonstrar Interesse)
    Cliente --> (Reservar Imóvel)
    Cliente --> (Cancelar Reserva)

    Corretor --> (Registrar)
    Corretor --> (Login)
    Corretor --> (Acessar Dashboard)
    Corretor --> (Cadastrar Imóvel)
    Corretor --> (Editar Imóvel)
    Corretor --> (Gerenciar Reservas)
```

-   ## Diagramas de Fluxo
 Fluxo de Login e Redirecionamento por Perfil
```mermaid
flowchart TD
    A[Início] --> B[Inserir credenciais]
    B --> C{Credenciais válidas?}
    C -- Não --> D[Exibir erro e retentar]
    C -- Sim --> E{Perfil do Usuário}
    E -- Cliente --> F[Redirecionar para Tela de Busca]
    E -- Corretor --> G[Redirecionar para Dashboard]
    F --> H[Fim]
    G --> H[Fim]
```

-   ## Fluxo do Cliente (Busca -> Visualização -> Interesse)
```mermaid
flowchart TD
    A[Cliente logado] --> B[Buscar imóvel]
    B --> C[Listar resultados]
    C --> D[Selecionar imóvel]
    D --> E[Visualizar detalhes]
    E --> F{Tem interesse?}
    F -- Não --> G[Voltar à listagem]
    F -- Sim --> H[Registrar interesse / Reserva]
    H --> I[Fim]
```
- ## Fluxo do Corretor (Login -> Dashboard -> Criar/Editar Imóvel)
```mermaid
flowchart TD
    A[Corretor logado] --> B[Dashboard]
    B --> C{Ação desejada}
    C -- Criar --> D[Preencher dados do imóvel]
    D --> E[Salvar imóvel no sistema]

    C -- Editar --> F[Selecionar imóvel existente]
    F --> G[Editar informações]
    G --> E[Salvar alterações]

    E --> H[Fim]
```