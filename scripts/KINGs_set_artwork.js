const NFT_KINGs = artifacts.require("KINGs");

module.exports = async function(callback) {
    try {
        const nftInst = await NFT_KINGs.deployed()

    const AMOUNT = 1200;
    const ARTWORK = [
      "QmZs9TFJRas6in8Y2mtZoeddupWtAyMFrxN98GYEfq3Chu"
    ];

    //"sperm_king_gold.svg"  
    if ( ARTWORK.length > 0 ){
        console.log('Setting Artwork...')
        r = await nftInst.setArtwork( AMOUNT , "Sperm King" , ARTWORK );
        console.log(JSON.stringify(  r, null , 2 ) );
    }

    } catch(error) {
        console.log(error)
    }
    callback()
}
