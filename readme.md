# React Quiz Game - Web Development

## Sobre

Quiz sobre Desenvolvimento Web 100% funcional, feito com React e Spring Boot em Java, por [Guilherme Marcondes](https://github.com/GuilhermeCMarc).

## Como funciona ?

O jogo abre com uma tela de boas vindas e ao clicar no botão "Iniciar Jogo", a aplicação faz uma requisição no banco de dados e traz todas as alternativas em ordem aleatória.
Depois, a cada questão, a aplicação valida a resposta e se estiver errada, ao clicar no botão "Próximo", aparecerá um popup na tela informando que você errou e te dando a opção de recomeçar o jogo. Se você acertar todas as questões, aparecerá um popup informando que você fechou o Quiz!! Boa prova e espero que se divirta ;)

![Mobile](./presentation_imgs/Mobile.png)

# Instalação

## Frontend

Primeiramente, clone esse repositório git em sua máquina e rode um desses comandos dentro da pasta `frontend`, para instalar as dependências: `yarn install` ou `npm install`

Para iniciar a aplicação só utilizar um desses comandos: `yarn start` ou `npm start`
( é necessario ter o Node instalado na máquina )

_OBS.: **O frontend precisa do backend** para funcionar corretamente!!_

## Backend

Para iniciar a API backend, basta inicializar com o Spring Boot
(Ocorreu um bug no arquivo de build "backend-0.0.1-SNAPSHOT.jar no qual ele não está de acordo com o UTF-8, portanto a melhor forma de inicializar a aplicação é por uma IDE iniciando pelo Spring Boot)

_OBS.: É necessário ter o Java instalado em sua máquina para rodar a aplicação._

_OBS².: Por padrão, o **frontend roda na porta 3000** e o **backend, na 8080**. Verifique se essas portas estão disponíveis em caso de algum erro._

# Tecnologias

## Backend

- Java
- H2 Database
- Spring Boot
- Lombok
- JPA

## Frontend

- React
- Typescript
- Scss (Css with super powers)
- Font Awesome React
