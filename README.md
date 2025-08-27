# 🛍️ Angular E-commerce App

Este projeto é uma aplicação **Angular 16+** standalone utilizando **Angular Material** para interface.  
Foi desenvolvido como um protótipo de e-commerce com funcionalidades de **catálogo de produtos, carrinho de compras e área administrativa**.

---

## 🚀 Funcionalidades

### 👤 Autenticação
- Login via [FakeStoreAPI](https://fakestoreapi.com/).
- Armazenamento de token JWT no `localStorage`.
- Decodificação do token para obter o **nome do usuário**.
- **Regra de admin:** se o usuário logado tiver `username = "johnd"`, ele é considerado **Administrador**.

### 🛒 Catálogo e Carrinho
- Listagem de produtos na página inicial.
- Exibição de **detalhes do produto**.
- Adição de produtos ao carrinho.
- Exibição do carrinho em **sidenav**.
- **Snackbar** ao adicionar itens, confirmando a ação.
- Cálculo automático de **total de itens** e **valor total**.

### 🧭 Navbar
- Navegação entre páginas (Home, Carrinho, Login, Admin).
- Exibição do usuário logado.
- Botão **Logout**.

### 🔒 Guardas e Interceptores
- `auth.guard.ts`: protege rotas autenticadas.
- `auth.interceptor.ts`: adiciona token JWT automaticamente no `Authorization Header`.

### ⚙️ Área Administrativa
- Disponível somente para **usuário admin (username: johnd)**.
- Listagem de produtos em tabela (`MatTable`).
- Exclusão de produtos.
- Criação de novos produtos:
  - Formulário reativo com validação.
  - Botão "Novo Produto" / "Cancelar" controla exibição do formulário.
  - Snackbar ao salvar com sucesso.
  - Atualização automática da tabela após salvar.

---

## 🖥️ Tecnologias
- **Angular 16+** (standalone components + signals)
- **Angular Material** (UI/UX)
- **RxJS**
- **jwt-decode** (decodificação do JWT)
- **FakeStoreAPI** (mock de dados e autenticação)

---

## ▶️ Como rodar

```bash
# instalar dependências
npm install

# rodar servidor dev
ng serve
