const axios = require('axios')
const { createWriteStream, writeFileSync } = require ('fs')
const stream = require( 'stream');
const { promisify } = require ('util');

const finished = promisify(stream.finished);

async function downloadFile(fileUrl, outputLocationPath) {
  const writer = createWriteStream(outputLocationPath);
  return axios({
    method: 'get',
    url: fileUrl,
    responseType: 'stream',
  }).then(async response => {
    response.data.pipe(writer);
    return finished(writer); //this is a Promise
  });
}
const main = async () => {
  try {
    
    const { data } = await axios.get('https://www.instagram.com/mpart1919/?__a=1')
    const urls = data.graphql.user.edge_owner_to_timeline_media.edges.map((value) => value.node.display_url)

    let count = 0, files = []
    for await (const url of urls) {
      count++
      await downloadFile(url, `./public/img/${count}.jpg`)
      files.push(`/img/${count}.jpg`)
      console.log(`./public/img/${count}.jpg`)
    }
    writeFileSync('./src/lib/files.json', JSON.stringify(files))
    
  } catch (error) {
    console.log(error)
  }
}

main()