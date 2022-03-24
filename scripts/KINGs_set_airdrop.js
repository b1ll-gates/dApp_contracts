const NFT = artifacts.require("KINGs");

module.exports = async function(callback) {
  try {
    const nft = await NFT.deployed()
    const data = require('./tokenholders.json');
    //var accounts = await web3.eth.getAccounts( );

    //var addresses = [
  //  ];
    //addresses[ 0 ] = accounts[0];

    const offset = 108;

    if ( data.length > 0 ){
        for ( let i = offset; i < data.length; i++){
            console.log(`Setting Airdrop... ${ i } : ${ data[i][0] } `)
            let r = await nft.setAirdrop( data[ i ][0] );
            console.log( r );
            console.log("waiting...");
            await new Promise(r => setTimeout(r, 20000));
        }
    }
   } catch(error) {
    console.log(error)
  }
  callback()
}
