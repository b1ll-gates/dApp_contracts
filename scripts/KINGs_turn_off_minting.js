const NFT_KINGs = artifacts.require("KINGs");
const Staking = artifacts.require("Staking");


module.exports = async function(callback) {
  try {
    const nftKINGsInst = await NFT_KINGs.deployed()
    const stakeInst = await Staking.deployed()

    console.log(`Staking address: ${ stakeInst.address }`);
    const NULL_ADDR = "0x0000000000000000000000000000000000000000";
    console.log(`$ NFT: setStakeAddress( ${ NULL_ADDR } ) ->`);
    r = await nftKINGsInst.setStakeAddress( NULL_ADDR ); 
    console.log(JSON.stringify(  r, null , 2 ) );
    console.log("==========================================");
  
  } catch(error) {
    console.log(error)
  }
  callback()
}
