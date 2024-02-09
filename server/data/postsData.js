const mysql = require('../infra/database');

const postsData = {
    getPosts: async () => {
        return await mysql.execute('SELECT * FROM post;');
    }
}

module.exports = postsData;