const { createClient } = require('redis')

const client = createClient({
    url: 'redis://default:@localhost:6379'
    // url: 'redis://default:@indozone-dev.xdkams.ng.0001.apse1.cache.amazonaws.com:6379'
});

client.on("connect", () => console.log("connected"))
client.on('error', (err) => console.log('Redis Client Error', err));

async function test() {
    console.log("here we go..")
    await client.connect();
    await client.set('key', 'value27');
    const value = await client.get('key');
    console.log("the value", value)
    await client.disconnect();
}
test()
client.on('ready', () => {
    console.log("ready to use")

});


