Esse projeto é um projeto para uma Loja padrão para ser usado como base para qualquer dev.

**Como Utilizar o projeto:**

 - Clonar o repositório
 - Instalar as dependências (npm install)
 - Realizar as mudanças na branch dev (git checkout dev)
 - Fazer o commit da mudança 
    - git add .
    - git commit -m "descrição do commit"
 - Copiar o hash do log do commit (git log)
 - mudar para a branch main (git checkout main)
 - Puxar o commit para a branch (git cherry-pick <colar a hash do log>)
 - Realizar o build (git run build)
 - Testar a build (npm start)
 - Alterar a versão no arquivo package.json
 - Commitar a mudança na main
 - Criar a versão: (git checkout -B version/<numero da versão>)
 - Buildar a versão e realizar o deploy no serviço escolhido

 Esse projeto utiliza o pré-processador sass no lugar do TailwindCss, o que permite o uso de algumas condicionais interessantes. Bons projeto para todos.