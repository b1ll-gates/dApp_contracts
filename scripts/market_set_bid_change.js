const NFT = artifacts.require("NFT");
const Market = artifacts.require("Market");
const Staking = artifacts.require("Staking");


module.exports = async function(callback) {
  try {
    const marketInst = await Market.deployed()
    const stakeInst = await Staking.deployed()

    console.log(`$ NFT: maxBidChange(  ) ->`);
    r = await marketInst.maxBidChange(  );
    console.log( web3.utils.fromWei( r ,"ether" ) );
    console.log("==========================================");
    
      r = await marketInst.setMaxBidChange( "200000000000000000000"  );
 
  } catch(error) {
    console.log(error)
  }
  callback()
}
