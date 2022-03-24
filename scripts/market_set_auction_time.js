const NFT = artifacts.require("NFT");
const Market = artifacts.require("Market");
const Staking = artifacts.require("Staking");


module.exports = async function(callback) {
  try {
    const marketInst = await Market.deployed()
    const stakeInst = await Staking.deployed()

    const time = 240;
    console.log(`$ NFT: setAuctionTimePeriod( ${ time } ) ->`);
    r = await marketInst.setAuctionTimePeriod( time );
    console.log(JSON.stringify(  r, null , 2 ) );
    console.log("==========================================");
 
  } catch(error) {
    console.log(error)
  }
  callback()
}
