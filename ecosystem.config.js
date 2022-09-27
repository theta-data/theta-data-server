module.exports = {
  apps: [
    {
      name: 'theta-data-api',
      script: './dist/main.js',
      instances: 8,
      exec_mode: 'cluster',
      autorestart: false,
      watch: false,
      max_memory_restart: '4G',
      increment_var: 'PORT',
      instance_var: 'INSTANCE_ID',
      env_test: {
        autorestart: true,
        NODE_ENV: 'test',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        autorestart: true,
      },
      env_dev: {
        NODE_ENV: 'dev',
        PORT: 3000,
        exec_mode: 'fork',
      },
    },
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
