const postsData = require('../data/postsData')

const postService = {
    getPosts: () => {
        return postsData.getPosts()
    }, 
}

module.exports = postService;