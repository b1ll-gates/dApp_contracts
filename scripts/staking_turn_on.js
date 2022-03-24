const Staking = artifacts.require("Staking");


module.exports = async function(callback) {
  try {
    const stakeInst = await Staking.deployed()
    const STAKING_AMOUNT = 5;
    console.log(`$ stake: setMaxStaking( ${ STAKING_AMOUNT } ) ->`);
    r = await stakeInst.setMaxStaking( STAKING_AMOUNT ); 
    console.log(JSON.stringify(  r, null , 2 ) );
    console.log("==========================================");
  
  } catch(error) {
    console.log(error)
  }
  callback()
}
