const NFT_PXLs = artifacts.require("PXLs");
const Staking = artifacts.require("Staking");

module.exports = async function(callback) {
  try {
    const nftPXLsInst = await NFT_PXLs.deployed()
    const stakeInst = await Staking.deployed()
    console.log(`$ NFT: setStakeAddress( ${ stakeInst.address } ) ->`);
    r = await nftPXLsInst.setStakeAddress( stakeInst.address ); 
    console.log( r );
    console.log("==========================================");
  
  } catch(error) {
    console.log(error)
  }
  callback()
}
