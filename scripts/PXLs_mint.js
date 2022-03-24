const NFT = artifacts.require("PXLs");
//const ECR20 = artifacts.require("NwBTC");

module.exports = async function(callback) {
  try {
    const nftInst = await NFT.deployed()
    //const erc20Inst = await ECR20.deployed()

    //await erc20Inst.faucet( );
    //await erc20Inst.approve( nftInst.address , web3.utils.toWei("100","ether") ).on('data', (d) => console.log(d) );

    console.log("$ NFT: mint( ) ->");
    await nftInst.mint()
        .on('receipt', async function(r) {
            console.log("===========reciept================="); 
              console.log(JSON.stringify( r, null , 2) );
        })
    .on('data', async function(r) {
            console.log("===========data================="); 
            console.log(JSON.stringify( r, null , 2) );
        })
    
 .on('message', async function(r) {
            console.log("===========message================="); 
              console.log(JSON.stringify( r, null , 2) );
        })
    
 
  } catch(error) {
    console.log(error)
  }
  callback()
}
