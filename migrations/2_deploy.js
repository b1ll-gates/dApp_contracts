const NFT_PXLs = artifacts.require("PXLs");
const NFT_KINGs = artifacts.require("KINGs");
const Market = artifacts.require("Market");
const Stake = artifacts.require("Staking");
const Token = artifacts.require("NwBTC");
//const NwBTC = "0x8CE80d132DC5F2A0a017fA0df79ec58Ab23Dd4D2";

//const nft = '0xE8c7c500C97A6673026BD4FB1812a6Dc7f4878ca';

module.exports = async function(deployer) {
  //await deployer.deploy(NFT_PXLs, NwBTC);
  await deployer.deploy(Token);
  const nwbtc = await Token.deployed()
  await deployer.deploy(NFT_PXLs, nwbtc.address );
  const nft = await NFT_PXLs.deployed()
  console.log( "NFT PXLs is deployed" );
  //await deployer.deploy(NFT_KINGs,NwBTC);
  await deployer.deploy(NFT_KINGs, nwbtc.address );
  const nft2 = await NFT_KINGs.deployed()
  console.log( "NFT KINGs is deployed" );
  await deployer.deploy(Market, nft.address);
  const market = await Market.deployed()
  await deployer.deploy( Stake , nwbtc.address , nft.address);
  const stake = await Stake.deployed()

  //const contracts = { "NwBTC" : NwBTC , "PXLs" : nft, "stake" : stake.address };
  //const contracts = { "NwBTC" : NwBTC , "PXLs" : nft.address, "KINGs" : nft2.address, "market" : market.address, "stake" : stake.address };
  const contracts = { "NwBTC" : nwbtc.address , "PXLs" : nft.address, "KINGs" : nft2.address, "market" : market.address, "stake" : stake.address };

  console.log(`Contract addresses: ${ JSON.stringify( contracts , null ,2 ) }`);
};

