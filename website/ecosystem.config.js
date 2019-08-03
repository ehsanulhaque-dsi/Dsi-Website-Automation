module.exports = {
    deploy: {
        production: {
            user: 'admin',
            host: 'www.innovatorslab.net',
            ref: 'origin/master',
            repo: 'git@gitlab.com:dsinnovators/website.git',
            path: '/var/www/dsi',
            'post-deploy': 'npm install && npm run build'
        },
    }
};
