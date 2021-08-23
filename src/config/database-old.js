module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123456',
  database: 'ecommerce_nodejs',
  options: { dialect: 'postgres' },
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  },
}