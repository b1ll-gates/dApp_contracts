const NFT = artifacts.require("KINGs");
const Market = artifacts.require("Market");


module.exports = async function(callback) {
  try {
    const marketInst = await Market.deployed()
    const nftInst = await NFT.deployed()

    console.log(`$ Market: addApprovedContract( ${ nftInst.address } ) ->`);
    r = await marketInst.addApprovedContract( nftInst.address );
    console.log(JSON.stringify( r, null , 2) );
    console.log("==========================================");
    
    //r = await marketInst.setMaxBidChange( "200000000000000000000"  );
 
  } catch(error) {
    console.log(error)
  }
  callback()
}
