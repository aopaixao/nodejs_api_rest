# How-to : gerar mapeamento ORM de forma automática utilizando sequelize e sequelize-auto
**Nesse projeto foi utilizado o ORM sequelize, com os modelos sendo gerados automaticamente com a lib sequelize-auto 

1. Pré-requisitos: instale a sequelize e o dialeto do SGBD a ser utilizado (mysql2 | pg pg-hstore | sqlite3 | tedious)
2. Instale a lib sequelize-auto: yarn add sequelize-auto
3. Gere as classes com o comando: 

<code>node_modules\.bin\sequelize-auto -h ENDERECO_BANCO -d NOME_DO_BANCO -u USUARIO_BANCO -x SENHA -p 5432 --dialect postgres -c src/config/database.js -o src/app/models -t produto categoria cliente endereco pedido produto_pedido</code>

Onde: 
<ul>
<li>
  node_modules\.bin\sequelize-auto   : no ambiente Windows, e estando na pasta do projeto, deve-se usar o caminho absoluto para a pasta do módulo sequelize-auto;
</li>
<li>
  -h : endereço IP do banco de dados  
</li>
<li>
  -d : nome do banco de dados
</li>
<li>
  -u : nome do usuário do banco de dados 
</li>
<li>
  -x : senha do banco de dados
</li>
<li>
  -p : número da porta do bd  
</li>
<li>
  --dialect : dialeto do SGBD (verificar a documentação oficial para informações sobre outros dialetos)
</li>
<li>
  -c : arquivo de configuração contendo as credenciais e opções de conexão com o BD
</li>
<li>
  -o : caminho para a pasta onde os modelos gerados serão armazenados
</li>
<li>
  -t : nome da tabela - ou tabelas, separadas por espaço 
</li>
</ul>

3. Os modelos gerados em sequilize possuem alguns métodos CRUD nativos, a saber: create, findAll e findByPk, 


