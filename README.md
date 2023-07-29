# ProjetoFinal 

Projeto final apresentado como requisito para a conclusão do curso Todas em Tech da <img src="src/assets/reprograma-fundos-claros.png" alt="logo reprograma" width="200">

### Quem é Flaviana?

![image](https://github.com/FlavianaFXT/ProjetoFinal-reprograma/assets/113718720/1e13d5e7-b1b4-4701-a689-ec293ec77ea1)


Flaviana Ferraz é uma sertaneja de Pernambuco morando no sertão da Paraiba, formada em Gestão Ambiental e Mestre em Recursos Hídricos, após mais de 10 anos de formada, aos 34 anos, decidiu fazer transição de carreira. Hoje, empreendedora e aluna {reprograma} trilhando os caminhos do Desenvolvimento FrontEnd.

#### Contatos

- [E-mail](flaviferraz@yahoo.com.br)
- [LinkedIn](https://www.linkedin.com/in/flaviana-ferraz-frontend)
- [GitHub](https://github.com/flavianafxt)


## 🧠 DESCRIÇÃO DO PROJETO

## 🧠 Contexto

O objetivo aqui era criar um site responsivo usando ReactJS, de uma instituição que facilita a doação e troca de roupas e acessórios entre os que estão doando e os que necessitam, e brechó online para aqueles que precisam de algum dinheiro e/ou comprar roupas em otimo estado a um custo mais baixo.
  A ideia surgiu a partir de uma necessidade própria, tendo em vista que sempre fiz doações e, ao mudar de cidade, tenho tido dificuldade para encontrar locais que recebam o ano inteiro.
  Este é um MVP - Minimum Viable Product - que terá continuação e implementações futuras, que possibilita demonstrar habilidades e revisar todos os conteúdos vistos no curso de Front-End da {Reprograma}.

![image](https://github.com/FlavianaFXT/ProjetoFinal-reprograma/assets/113718720/c431a970-e853-4c5d-92e6-c4a53c9919ce)

## O site contem 6 páginas, além de subpáginas:

* Home
* Sobre
* Doações
* Brechó
* Busque Aqui
* Fale Conosco

Foi utilizada ainda a estrutura de componentes para compor partes das páginas com maior facilidade.

## 🧠 Estrutura do projeto


![image](https://github.com/FlavianaFXT/ProjetoFinal-reprograma/assets/113718720/7e4d2534-e0d0-4ab7-a079-f2d60cbefa0f)

![image](https://github.com/FlavianaFXT/ProjetoFinal-reprograma/assets/113718720/53c29ff7-1137-472f-9caa-1b95345f4b2f)

![image](https://github.com/FlavianaFXT/ProjetoFinal-reprograma/assets/113718720/132d0c9b-7ebf-46fb-9d78-72f3b53fd4d0)

![image](https://github.com/FlavianaFXT/ProjetoFinal-reprograma/assets/113718720/c98f1294-6a58-4dc0-8f1e-a923ece4dfbe)


## 🧠TECNOLOGIAS UTILIZADAS
| Ferramenta | Descrição |
| --- | --- |
| `ReactJS` | framework web|
| `Vite` | gerador de projeto de front-end|
| `npm` | gerenciador de pacotes|
| `Firebase` | Ferramenta realtime database para gravar as mensagens de contato|
| `Module CSS` | Ferramenta para ter mais produtividade ao estilizar a aplicação|
| `Phosphor` | Dependência com icones super legais|
| `React router dom` | Dependência para criar rotas no reactjs|
| `Vercel` | Hospedagem para a aplicação, fiz o deploy integrado com o github|
| `Github` | Hospedagem do código fonte integrado com gerenciador de versionamento|
  

## 🧠 PASSO A PASSO UTILIZADO

1️⃣ Criação de repositorio no github e clone na maquina em que trabalhei no projeto através do Git Bash
2️⃣ Start do projeto na maquina utilizando o VS Code e seu terminal, atraves dos comandos de iniciação vite e node
 
  ```bash
  npm create vite@latest nome-projeto -- --template react
  ```
   ```bash
  cd nome-projeto
   ```
  ```bash
    npm i
  ```
  ```bash
     npm run dev
  ```
  
3️⃣ Exclusão de arquivos do projeto que não faremos uso e inserção de algum elemento em App.jsx para ver se o projeto está funcionando
4️⃣Instalação do react-router-dom para criação do arquivo Router e possibilitar a navegação do Menu e para outras páginas componentes do site
   ```bash
   npm i react-router-dom@6
   ``` 
5️⃣ Criação do Router para o menu de navegação.
6️⃣ Criação dos componentes que se repetem 
7️⃣ Criação de componentes e de conteúdo de cada página principal, assim como suas estilizações. Nessa fase, foi utilizado o phospor icons, o qual foi instalado pelo terminal utilizando o comando:
   ```bash
   npm i phosphor-react
   ```
  
8️⃣ Criação e integração do firebase com variaveis de ambiente na página Fale Conosco
 ```bash
 npm i firebase
```
  
9️⃣ Adicionar todas as modificações a cada etapa e subir no GitHub
 ```bash
 git add .
 ```
 ```bash
 git commit -m "comentario"
```
 ```bash
 git push
```

1️⃣ 0️⃣ Deploy do projeto no Vercel


## 🧠 FUNCIONALIDADES IMPLEMENTADAS
✔️ Utilização do Router para navegação entre páginas
✔️ Integração com o firebase para criação de banco de dados para o recebimento das mensagens enviadas via página Fale Conosco
✔️ Eventos de clique que levam a páginas externas e entre páginas
✔️ Componentização para desenvolvimento mais rápido das páginas e elementos das páginas
✔️ Estilização com o CSS modulado
✔️ Iniciação às funcionalidades da página Busque Aqui, com banco de dados armazenado localmente em um arquivo  tipo json
✔️ Funcionalidades do form implementado na página Fale Conosco e integração deste com o firebase para receber as mensagens enviadas pelo site
✔️ Responsividade

## 🧠 IMPLEMENTAÇÕES FUTURAS
- [ ] Integração da página Quero Doar com banco de dados para receber as informações de doação e do doador
- [ ] Página de Login e Login
- [ ] Página do carrinho de compras (tanto para Quero Doações como para Brechó)
- [ ] Página e formulário Cadastre-se aqui para instituições que desejam receber doações
- [ ] Implementar a Busca por Categorias na pagina Quero Doações e Brechó
- [ ] Funcionalidades dos botões Detalhes e Coletar, existentes nos cards dos produtos a serem coletados ou comprados
- [ ] Campo de Busca da página Brechó
- [ ] Página e formulário Cadastre seu produto aqui para quem deseja vender peças no brechó
- [ ] Melhorar Banco de Dados de instituições cadastradas
- [ ] Finalizar funcionalidade de busca de instituições por CEP na Página Busque Aqui


## 🧠 COMO RODAR O PROJETO

Para rodar esse projeto em sua máquina, siga os passos a seguir:

1️⃣ Realize o fork desse repositorio
2️⃣ Clone na sua máquina
3️⃣ Entre no diretório do repositorio clonado e as dependências do projeto, com o comando:
                                           npm install ou npm i
4️⃣ Por fim rode o projeto:
                           npm run dev
O navegador será aberto automaticamente usando a porta localhost:3000 
  
## 🧠 CONFIRA O RESULTADO: https://projeto-final-reprograma-ngxo6h0lb-flavianafxt.vercel.app/


  


