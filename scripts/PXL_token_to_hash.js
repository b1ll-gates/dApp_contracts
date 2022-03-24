const NFT = artifacts.require("NFT");

module.exports = async function(callback) {
  try {
    const nftInst = await NFT.deployed()

    console.log("$ NFT: tokenIdToHash( ) ->");
    let r = await nftInst.tokenIdToHash.call("1");
    console.log(JSON.stringify( r, null , 2) );
    console.log("================================"); 
    
 
  } catch(error) {
    console.log(error)
  }
  callback()
}
