const Market = artifacts.require("Market");
const Staking = artifacts.require("Staking");


module.exports = async function(callback) {
  try {
    const marketInst = await Market.deployed()
    const stakeInst = await Staking.deployed()

    const time = 240;
    console.log(`$ Stake: setPeriod( ${ time } ) ->`);
    r = await stakeInst.setPeriod( time );
    console.log(JSON.stringify(  r, null , 2 ) );
    console.log("==========================================");
 
  } catch(error) {
    console.log(error)
  }
  callback()
}
