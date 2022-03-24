const NFT = artifacts.require("PXLs");

module.exports = async function(callback) {
  try {
    const nft = await NFT.deployed()

    var accounts = await web3.eth.getAccounts( );

    var addresses = [];
    addresses[ 0 ] = accounts[0];

    if ( addresses.length > 0 ){
        for ( let i =0; i < addresses.length; i++){
            console.log('Setting Airdrop...')
            await nft.setAirdrop( addresses[ i ]  )
                .on('receipt', async function(receipt) {
              console.log(JSON.stringify( r, null , 2) );
            })
    }
    }
   } catch(error) {
    console.log(error)
  }
  callback()
}
