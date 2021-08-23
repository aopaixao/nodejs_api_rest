const postgres = {
  dbname: 'ecommerce_nodejs',
  user: 'postgres',
  pass: '123456',
  options: { dialect: 'postgres' },
  autoOptions: { dialect: 'postgres' }
};

module.exports = postgres;