const mysql = require('../infra/database');

const postsData = {
    getPosts: async () => {
        return await mysql.execute('SELECT * FROM post;');
    },
    savePost: async (post) => {
        return await mysql.execute('INSERT INTO post (title, content) values (?, ?)', [post.title, post.content]);
    },
    deletePost: async (id) => {
        return await mysql.execute('DELETE FROM post WHERE id = ?;', [id])
    }
}

module.exports = postsData;