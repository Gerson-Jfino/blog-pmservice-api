const postsData = require('../data/postsData')

const postService = {
    getPosts: () => {
        return postsData.getPosts()
    }, 
    savePost: (post) => {
        return postsData.savePost(post)
    },
    deletePost: (id) => {
        return postsData.deletePost(id)
    }
}

module.exports = postService;