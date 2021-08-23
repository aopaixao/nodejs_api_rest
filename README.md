# How-to : gerar mapeamento ORM de forma automática
**Nesse projeto foi utilizado o ORM sequelize, com os modelos sendo gerados automaticamente com a lib sequelize-auto 

1. Instale a lib sequelize-auto: yarn add sequelize-auto
2. Gere as classes com o comando: 

<code>node_modules\.bin\sequelize-auto -h ENDERECO_BANCO -d NOME_DO_BANCO -u USUARIO_BANCO -x SENHA -p 5432 --dialect postgres -c src/config/database.js -o src/app/models -t produto categoria cliente endereco pedido produto_pedido</code>




