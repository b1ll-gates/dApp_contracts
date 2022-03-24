var ABI = require('./NwBTC_abi.json');
const NwBTC = "0x8CE80d132DC5F2A0a017fA0df79ec58Ab23Dd4D2";

module.exports = async function(callback) {
try {
    
    const account = "0xd86F0AA9D8433a80d7b7e7D693e68EF9847A494A"; 

    let tokenInst = new web3.eth.Contract( ABI , NwBTC );
   
console.log( tokenInst );

    console.log(`$ ECR20 : ballanceOf(${ account }) ->`);
    //tokenInst.methods.totalSupply().call().then( r => {
    tokenInst.methods.balanceOf( account ).call().then( r => {
        console.log( r  );
        console.log(web3.utils.fromWei( r , "ether" ) );
        console.log("==========================================");
    });

} catch(error) {
    console.log(error)
}
}
