const NFT = artifacts.require("KINGs");
const Market = artifacts.require("Market");
const Staking = artifacts.require("Staking");

module.exports = async function(callback) {
  try {
    const marketInst = await Market.deployed()
    const nftInst = await NFT.deployed()
    const stakeInst = await Staking.deployed()

    console.log(`$ Stake: addApprovedContract( ${ nftInst.address } ) ->`);
    r = await stakeInst.addApprovedContract( nftInst.address );
    console.log(JSON.stringify( r, null , 2) );
    console.log("==========================================");
    
    //r = await marketInst.setMaxBidChange( "200000000000000000000"  );
 
  } catch(error) {
    console.log(error)
  }
  callback()
}
