const NFT_PXLs = artifacts.require("PXLs");
const Staking = artifacts.require("Staking");

module.exports = async function(callback) {
  try {
    const nftPXLsInst = await NFT_PXLs.deployed()
    const stakeInst = await Staking.deployed()
    console.log(`Staking address: ${ stakeInst.address }`);
    const NULL_ADDR = "0x0000000000000000000000000000000000000000";
    console.log(`$ NFT: setStakeAddress( ${ NULL_ADDR } ) ->`);
    r = await nftPXLsInst.setStakeAddress( NULL_ADDR ); 
    console.log( r );
    console.log("==========================================");
  
  } catch(error) {
    console.log(error)
  }
  callback()
}
