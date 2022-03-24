const NFT = artifacts.require("NFT");
const Token = artifacts.require("NwBTC");
const Market = artifacts.require("Market");
const Staking = artifacts.require("Staking");


module.exports = async function(callback) {
  try {
    const nftInst = await NFT.deployed()
    
    const _price = 1200000000000000;
    
    console.log(`$ NFT: setPrice(  ${_price} ) ->`);
    r = await nftInst.setPrice( _price ); 
    console.log(JSON.stringify(  r, null , 2 ) );
    console.log("==========================================");

  } catch(error) {
    console.log(error)
  }
  callback()
}
