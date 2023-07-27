<h1 align="center">📚 Genesis Book 📚</h1>

<p>Este projeto é uma aplicação web desenvolvida em React que permite aos usuários visualizar uma lista de livros obtida da API do Google Books.</p>

<p>O projeto é composto por três componentes principais: Books, BookDetails e Header, além do componente Footer para o rodapé da página.</p>

## 💻 Features

## Página Principal (Books)

- A página principal exibe uma lista de livros obtidos através da API do Google Books. Os livros são exibidos em duas seções: `carousel` e `booksList`. Ao clicar em um livro, o usuário é redirecionado a outra página onde contém mais detalhes.

## Página de Detalhes do Livro (BookDetails)

- A página de detalhes do livro é aberta ao clicar em um livro na página principal. Ele exibe informações detalhadas sobre o livro, como título, autor, editora, ano de publicação e descrição.

## Barra de Pesquisa (SearchBar)

- A barra de pesquisa permite que os usuários pesquisem livros por meio de palavras-chave. Os resultados são obtidos em tempo real através da API do Google Books e exibidos na página principal.

## API do Google Books

- Este projeto utiliza a API do Google Books para obter informações sobre os livros exibidos na aplicação. A chave de API é armazenada em uma variável de ambiente para fins de segurança.

## Instruções de Uso

## Pré-requisitos

- Para executar o projeto em sua máquina local, você precisará ter o Node.js instalado. Caso ainda não o tenha, você pode baixá-lo em https://nodejs.org/.

## Instalação

- Faça o clone deste repositório para o seu computador utilizando o comando:

```bash
git clone https://github.com/LaisaCCAndrade/GenesisBook
```

## Navegue até o diretório do projeto

```bash
cd GenesisBook
```

## Instale as dependências do projeto executando o seguinte comando:

```bash
npm install
```

## Execução

- Para executar a aplicação, utilize o seguinte comando:

```bash
npm run dev
```

- A aplicação estará disponível no navegador no seguinte endereço: http://localhost:3000.

## Autora

- **Laisa Andrade** - [Github](https://github.com/LaisaCCAndrade)
