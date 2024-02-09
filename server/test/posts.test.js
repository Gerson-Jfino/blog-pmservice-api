const axios = require('axios')

test('Should get posts', async () => {
    const response = await axios.get('http://localhost:3000/posts')
    // console.log(response);
})