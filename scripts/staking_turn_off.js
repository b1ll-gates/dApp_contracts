const Staking = artifacts.require("Staking");


module.exports = async function(callback) {
  try {
    const stakeInst = await Staking.deployed()

    console.log(`$ stake: setMaxStaking( 0x0 } ) ->`);
    r = await stakeInst.setMaxStaking( 0x0 ); 
    console.log(JSON.stringify(  r, null , 2 ) );
    console.log("==========================================");
  
  } catch(error) {
    console.log(error)
  }
  callback()
}
