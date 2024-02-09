const postService = require('./postsService');
const crypto = require('crypto');

function generate() {
    return crypto.randomBytes(20).toString('hex');
}
test('Should save post', async() => {
    const post = await postService.savePost({
        title: generate(),
        content: generate()
    })
    expect(typeof post.insertId).toBe("number")
    postService.deletePost(post.insertId)
    // console.log(post.insertId);
})