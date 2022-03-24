const NFT_PXLs = artifacts.require("PXLs");
const NFT_KINGs = artifacts.require("KINGs");
const Market = artifacts.require("Market");
const Staking = artifacts.require("Staking");


module.exports = async function(callback) {
  try {
    const nftPXLsInst = await NFT_PXLs.deployed()
    const nftKINGsInst = await NFT_KINGs.deployed()
    const stakeInst = await Staking.deployed()

    console.log(`$ NFT: setStakeAddress( ${ stakeInst.address } ) ->`);
    r = await nftPXLsInst.setStakeAddress( stakeInst.address ); 
    console.log(JSON.stringify(  r, null , 2 ) );
    console.log("==========================================");

    console.log(`$ NFT: setStakeAddress( ${ stakeInst.address } ) ->`);
    r = await nftKINGsInst.setStakeAddress( stakeInst.address ); 
    console.log(JSON.stringify(  r, null , 2 ) );
    console.log("==========================================");
  
  } catch(error) {
    console.log(error)
  }
  callback()
}
