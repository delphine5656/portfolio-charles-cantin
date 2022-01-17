module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b346c2e27b3d952dc29f37ecbb1103dd'),
  },
});
