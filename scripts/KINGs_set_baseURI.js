const NFT_KINGs = artifacts.require("KINGs");

module.exports = async function(callback) {
    try {
        const nftInst = await NFT_KINGs.deployed()
        const BASE_URL = "https://b1ll-gates.github.io/myFirstSite/NFTs/"

        console.log('Setting Base URI...')
        r = await nftInst.setBaseURI( BASE_URL );
        console.log(JSON.stringify(  r, null , 2 ) );

    } catch(error) {
        console.log(error)
    }
    callback()
}
