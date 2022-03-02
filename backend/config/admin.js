module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '112953f6191b7da5d25a663ab9847d74'),
  },
});
