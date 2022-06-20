# Trabalho final S202
Esse projeto é um de um CRUD de rede social com login e criação de comentários.

# Instalando
Neste projeto foi usado o Yarn para realizar a execução do projeto, desta forma, após realizar o clone do projeto usando o seguinte comando:
```
git clone https://github.com/allantrigo/social.git
```
Com o projeto clonado basta então executar o seguinte comando para instalar as dependências
```
yarn
```
# Rodando o projeto
Para rodar o projeto é necessário criar um arquivo ```.env``` com as seguintes configurações dentro dele:
```
CONNECT_STRING="<String de conexão do banco do MongoDB>"
```
Com isso feito é possível rodar o projeto usando o nodemon no ambiente de dev. Isso faz com que o código possa ser rapidamente testado e atualizado, rodando em tempo real. Para isso, basta executar o seguinte comando:
```
yarn dev
```
# Coleção
Também há no projeto uma coleção do insomnia na pasta docs, basta importá-la para utilizar das chamadas disponíveis da API.
