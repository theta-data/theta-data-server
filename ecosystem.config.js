module.exports = {
  apps: [
    {
      name: 'analyse',
      script: './dist/analyse.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: false,
      watch: false,
      max_memory_restart: '2G',
      env_test: {
        NODE_ENV: 'test',
        autorestart: true,
      },
      env_production: {
        NODE_ENV: 'production',
        autorestart: true,
      },
      env_dev: {
        NODE_ENV: 'dev',
        exec_mode: 'fork',
      },
    },
  ],
};
