const NFT_KINGs = artifacts.require("KINGs");
const Staking = artifacts.require("Staking");


module.exports = async function(callback) {
  try {
    const nftKINGsInst = await NFT_KINGs.deployed()
    const stakeInst = await Staking.deployed()

    console.log(`$ NFT: setStakeAddress( ${ stakeInst.address } ) ->`);
    r = await nftKINGsInst.setStakeAddress( stakeInst.address ); 
    console.log(JSON.stringify(  r, null , 2 ) );
    console.log("==========================================");
  
  } catch(error) {
    console.log(error)
  }
  callback()
}
