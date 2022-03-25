//const ERC20 = artifacts.require("./ERC20.sol");
const NFT_PXLS = artifacts.require("PXLs");
const NFT_KINGS = artifacts.require("KINGs");
const Token = artifacts.require("NwBTC");
const Market = artifacts.require("Market");
const Staking = artifacts.require("Staking");

//*** Compile the contract 
//      `truffle compile --compile-all`
//*** Deploy the contracts
//      `truffle migrate`

const TEST = [[
    "0x1009071109071209071309071409070f0a07110a07130a07",
    "0x0e09071509070f0a07140a07100b07110b07120b07130b07"],
   [ "0x0f0a07140a07100b07110b07120b07130b07",
    "0x150907140a07100b07110b07120b07130b07"],
    ["0x0f0a07100a07110a07120a07130a07140a07",
    "0x0f0a09110a09130a09100b09120b09140b09"]];



        const BODIES = [`0x1000061100061200061300060e01060f01071001081101081201081301081401061501060d02060e02080f02081002081102081202081302081402081502081602060d03060e03080f03081003081103081203081303081403081503081603060c04060d04080e04080f04081004081104081204081304081404081504081604081704060c05060d05080e05080f05081005081105081205081305081405081505081605081705060c06060d06080e06080f06081006081106081206081306081406081506081606081706060c07060d07080e07080f07081007081107081207081307081407081507081607081707060c08060d08080e08080f08081008081108081208081308081408081508081608081708070c09060d09080e09080f09081009081109081209081309081409081509081609081709060d0a060e0a080f0a08100a08110a08120a08130a08140a08150a08160a060d0b060e0b080f0b08100b08110b08120b08130b08140b08150b08160b060e0c060f0c06100c08110c08120c08130c08140c08150c06100d06110d08120d08130d07140d06100e06110e07120e08130e08140e06100f06110f08120f08130f08140f060c10060d10060e10060f10061010061110081210081310081410060b11060c11080d11080e11080f11081011081111081211081311061411060a12060b12060c12080d12080e12080f12081012081112081212061312060213060313060413060513060a13060b13080c13080d13080e13060f13061013061113061213060114060214060314080414080514060614060714060914060a14060b14080c14080d14060015060115080215070315060415060515080615080715070815060915060a15080b15080c15060d15060016060116070416060516060616060716080816080916080a16080b16080c16060017060617060717060817060917070a17070b17060c1706`] 

const MOUTHS = [
    `0x1009071109071209071309071409070f0a07110a07130a07150a07100b07110b07120b07130b07140b07`,
    `0x0e09071509070f0a07140a07100b07110b07120b07130b07`,
    `0x0f0a07140a07100b07110b07120b07130b07`,
    `0x150907140a07100b07110b07120b07130b07`,
    `0x100907110907120907130907140907150907110a07140a07100b07110b07120b07130b07`,
    `0x100907110907120907130907110a07130a07100b07110b07120b07`,
    `0x0f0a07100a07110a07120a07130a07140a07`,
    `0x0800090601090902090703090705090906090808090a0809090909090a090a0a1c0b0a130c0a130d0a130e0a1b0f0a13100a13110a07120a070a0b1d0b0b1c0c0b1b0d0b130e0b130f0b13`,
    `0x0f0a09110a09130a09100b09120b09140b09`,
    `0x0f0a07100a07110a07120a07130a07140a07100b07130b07`,
    `0x0c091e17091e0f0a07140a07100b07110b07120b07130b07100d1f140d1f110e1f120e1e130e1f`,
    `0x0c09130d09131609131709130d0a130f0a13100a13110a13120a13130a13140a13160a130d0b130e0b130f0b13100b07110b07120b07130b07140b13150b13160b130e0c130f0c13100c13110c13120c13130c13140c13150c13100d13110d13120d13130d13110e13120e13`,
`0x0a02090904090a04090b04090a05090a07090a08090a0a09140a07100b12110b07120b07130b07090c120a0c120b0c120c0c1b0f0c120a0d120b0d130c0d130d0d1b0e0d120b0e120c0e1b0d0e12`,
`0x0f091e10091d11091d12091d13091d14091e0f0a1d100a07110a07120a07130a07140a1d0f0b1d140b1d0f0c1e140c1e`,
`0x0f0a07100a07110a07120a07130a07140a07120b3a130b3a`,
    `0x0c091e0d091e16091e17091e0d0a1e0f0a1f100a1e110a1e120a1e130a1e140a1f160a1e0d0b1e0e0b1e0f0b1e100b07110b07120b07130b07140b1e150b1e160b1e0e0c1f0f0c1e100c1f110c1e120c1e130c1f140c1e150c1f0f0d1f100d1e110d1f120d1f130d1e140d1f100e1f110e1e120e1e130e1f`,
    `0x0d09090e09091009091109091209091309091509091609090e0a090f0a09100a07110a07120a07130a07140a09150a090e0b090f0b09100b09110b09120b09130b09140b09150b09100c09110c09120c09130c09140c09`
];


const EYES = [
   `0x0e02010f03011003011104011204011205011305011405011505011605011705010e06010f06011006011206011306011406011506011606010f0701130701140701150701`, 
    `0x0e05010f05011005011305011405011505010f0601100601140601150601`,
    `0x0e05010f0501100501130501140501150501100601150601`,
    `0x0f05011405010e0601100601130601150601`,
    `0x0e06010f0601100601130601140601150601`,
    `0x0b04010c04010d04010e04010f04011004011104011204011304011404011504011604011704010c05010d05080e05010f05011005011105011205011305081405011505011605010c06010d06010e06080f06011006011206011306011406081506011606010d07010e07010f0701130701140701150701`,
    `0x0d04010e04010f04011304011404011504010c05010d05080e05010f05081005011205011305081405011505081605010c06010d06010e06080f06081006011206011306011406081506081606010d07010e07010f0701130701140701150701`,
    `0x0c04010d04010e04010f04011004011104011204011304011404011504011604011704010c05010e05011005011205011405011605010c06010d06011006011206011306011606010d07010e07010f0701130701140701150701`,
    `0x0e05010f05011005011305011405011505010e0601100601130601150601`,
    `0x0e05060f053b10050613050614053b1505060e06060f0606100606130606140606150606`,
   `0x0c00001700000c01000d01000e01001501001601001701000d02001602000e06010f06011006011306011406011506010f0701140701`,
    `0x0d00010e00040f00011000011100011200011300011400011500011600010d01010e01040f01041001011101011201011301011401011501011601010c02010d02010e02010f02011002011102011202011302011402011502011602011702011304011404011504011205011605010f0601120601140601160601120701160701130801140801150801160901170a01`,
    `0x0f003c1000001100001200001300000d013c0e013c0f01001001001101001201001301001401001501000c023c0d023c0e02000f02001002001102001202001302001402001502001602000c033c0d033c0e033c0f030010030011033c12033c1303001403001503001603000904000a04000b04000c04000d04000e04000f04001004001104001204001304001404001504001604001704000e06010f06011006011306011406011506010f0701140701`,
    `0x0e06010f06011006091306011406011506090f0709100701140709150701`, 
    `0x0e06010f06011006011306011406011506010f0701`,
    `0x1000131100131200131300130e01130f011310011311013e12013e1301131401131501130d02130e021310021311021312021313023e14023e1502131602130d031312031314031315033e1603130c04131504131704130c05131705130e06010f06011006011306011406011506011706130f0701140701`, 
    `0x0f05011405010e06010f06011006011306011406011506010f0701140701`,
    `0x1000321100321200321300310e01320f01321001311101311201311301311401311501310d02320e02310f02311002311102311202311302311402311502311602310d03310e03310f03311003321103311203321303311403321503311603310c04310d04320e04310f04321004311104321204311304321404311504321604311704320c05320d05310e05321505311605321705310e06010f06011006011306011406011506010f0701140701`,
        `0x0c001e10001e14001e17001e0c011e0d011e0f011e10011f11011e13011e14011f15011e17011e0c021e0d021f0e021e0f021f10021f11021f12021e13021f14021f15021f16021e17021e0c031e0d031f0e031f0f031e10031e11031e12031e13031e14031e15031f16031f17031e0c041e0d041e0e041e15041e16041e17041e0e06010f06011006011306011406011506010f0701140701`,
`0x0c000a0d000a0e000a0f000a10000a11000a12000a13000a14000a15000a16000a17000a0c010a0d010a0e010a0f010a10010a11011e12011e13010a14010a15010a16010a17010a0d020a0e02090f020910021e11021712021713021e14020915020916020a0c030e0d030e0e030c0f030c10030c11030c12030c13030c14030c15030c16030c17030c0e040e0f040e10040e11040e12040c13040d14040c15040c0e06010f06011006011306011406011506010f0701140701`,
    `0x0f00261000251100251200261300250d01260e01260f01251001261101251201261301261401261501250c02250d02260e02250f02251002261102261202251302261402261502251602250c03260d03260e03260f03261003261103261203251303251403261503261603260b04260c04250d04250e04270f04251004271104251204271304271404251504271604251704250b05250c05271605271705270e06010f06011006011306011406011506010f0701140701`,
`0x1000011100011200011300010e01010f01011001011101011201011301011401011501010d02050e02010f02011002011102011202011302011402011502011602010c03050d03010e03010f03011003011103011203011303011403011503011603010c04040d04010e04010f04011004011104011204011304011404011504011604011704010c05040d05010e05070f05071005071105011205011305071405071505071605011705010c06040d06010e06040f06041006041106011206011306041406041506041606011706010c07040d07010e07080f07011007081107011207011307081407011507081607011707010c08010d08040e08010f0804100801110804120801130804140801150804160801170804`,
   `0x10001e11001e12001e13001f0e011e0f011e10011e11011f12011e13011e14011f15011e0d021e0e021e11021e12021f13021e14021e15021f16021e0d031e14031e16031e0c041e17041e0c051e17051e0e06010f06011006011306011406011506010f0731140731`,
    `0x0e053a0f051710053a13053a15053a0f06001306171406001506170e073a0f071710073a13073a15073a`,
    `0x1000011100011200011300120e01010f01011001011101121201011301011401121501010d02010e02011102011202121302011402011502121602010d03011403011603010c04011704010c05011705010e06010f06011006011306011406011506011706010f0712140712`
];











const NFT_KING_ARTWORK = [
    "sperm_king_gold.svg"  
];

const PRICE = "12000000"
/*
contract("NFT Kings", (accounts) => {
    const test0 = it("should fail to mint because no art or stake address", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");
        let r;
        let tokenInst = await Token.deployed();
        assertAddress( tokenInst.address );
        console.log(`TOKEN instance@: ${ tokenInst.address }`);

        let nftInst = await NFT_KINGS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        console.log(`$ ECR20 : faucet(${ accounts[0] }) ->`);
        r = await tokenInst.faucet( {from:accounts[0]} );
        console.log( web3.utils.fromWei( r['receipt']['logs'][0]['args']['value'] , "ether") );
        console.log("==========================================");

        console.log("$ NFT: canMint ->");
        r = await nftInst.canMint.call( ); 
        console.log( r );
        console.log("==========================================");       

        console.log(`$ NFT: mint() ->`);
        r = await nftInst.mint( { from: accounts[0] } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");
    });

    const test1 = it("should fail to mint because no stake address", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");
        let r;
        let tokenInst = await Token.deployed();
        assertAddress( tokenInst.address );
        console.log(`TOKEN instance@: ${ tokenInst.address }`);

        let nftInst = await NFT_KINGS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        console.log(`$ ECR20 : faucet(${ accounts[0] }) ->`);
        r = await tokenInst.faucet( {from:accounts[0]} );
        console.log( web3.utils.fromWei( r['receipt']['logs'][0]['args']['value'] , "ether") );
        console.log("==========================================");

        let AMOUNT = 12000;
        console.log(`NFT : setArtWork( ${ AMOUNT } , "Sperm King" , ${ NFT_KING_ARTWORK } ) ->`)
        r = await nftInst.setArtwork( AMOUNT , "Sperm King" , NFT_KING_ARTWORK );
        console.log(JSON.stringify(  r, null , 2 ) );

        console.log("$ NFT: canMint ->");
        r = await nftInst.canMint.call( ); 
        console.log( r );
        console.log("==========================================");       

        console.log(`$ NFT: mint() ->`);
        r = await nftInst.mint( { from: accounts[0] } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");
    });

    const test2 = it("should fail to mint after 2 because of season end", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");
        let r;
        let tokenInst = await Token.deployed();
        assertAddress( tokenInst.address );
        console.log(`TOKEN instance@: ${ tokenInst.address }`);

        let nftInst = await NFT_KINGS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        let stakeInst = await Staking.deployed();
        assertAddress( stakeInst.address );
        console.log(`STAKING instance @: ${ stakeInst.address }`);
        console.log("==========================================");

        console.log(`$ ECR20 : faucet(${ accounts[0] }) ->`);
        r = await tokenInst.faucet( {from:accounts[0]} );
        console.log( web3.utils.fromWei( r['receipt']['logs'][0]['args']['value'] , "ether") );
        console.log("==========================================");

        console.log(`$ ECR20 : approve(${ nftInst.address } , ${ web3.utils.toWei("100000000","ether") } , {from: ${accounts[0]} }) ->`);
        r = await tokenInst.approve( nftInst.address , web3.utils.toWei("100000000","ether") , {from:accounts[0]});
        console.log(JSON.stringify( r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");

        let AMOUNT = 2;
        console.log(`NFT : setArtWork( ${ AMOUNT } , "Sperm King" , ${ NFT_KING_ARTWORK } ) ->`)
        r = await nftInst.setArtwork( AMOUNT , "Sperm King" , NFT_KING_ARTWORK );
        console.log(JSON.stringify(  r, null , 2 ) );

        console.log(`$ NFT: setStakeAddress( ${ stakeInst.address } ) ->`);
        r = await nftInst.setStakeAddress( stakeInst.address , {from: accounts[0] } ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log("$ NFT: canMint ->");
        r = await nftInst.canMint.call( ); 
        console.log( r );
        console.log("==========================================");       

        console.log(`$ NFT: #1 mint() ->`);
        r = await nftInst.mint( { from: accounts[0] } );
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");

        let tkn = r['receipt']['logs'][0]['args']['tokenId'];
        console.log(`$ NFT: tokenIdToHash( ${ tkn } ) ->`);
        r = await nftInst.tokenIdToHash.call( tkn );
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log("$ NFT: canMint ->");
        r = await nftInst.canMint.call( ); 
        console.log( r );
        console.log("==========================================");       

        console.log(`$ NFT: #2 mint() ->`);
        r = await nftInst.mint( { from: accounts[0] } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");

        console.log("$ NFT: canMint ->");
        r = await nftInst.canMint.call( ); 
        console.log( r );
        console.log("==========================================");       

        console.log(`$ NFT: #3 mint() ->`);
        r = await nftInst.mint( { from: accounts[0] } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");
    });
      
    const test3 = it("should fail to stake, as stake max is set to 0", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");
        let r;
        let tokenInst = await Token.deployed();
        assertAddress( tokenInst.address );
        console.log(`TOKEN instance@: ${ tokenInst.address }`);

        let nftInst = await NFT_KINGS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        let stakeInst = await Staking.deployed();
        assertAddress( stakeInst.address );
        console.log(`STAKING instance @: ${ stakeInst.address }`);
        console.log("==========================================");

        console.log(`$ ECR20 : faucet(${ accounts[0] }) ->`);
        r = await tokenInst.faucet( {from:accounts[0]} );
        console.log( web3.utils.fromWei( r['receipt']['logs'][0]['args']['value'] , "ether") );
        console.log("==========================================");
        console.log(`$ ECR20 : approve( ${ nftInst.address } , ${ web3.utils.toWei("100000000","ether") } , {from:${accounts[0]}}) ->`);
        r = await tokenInst.approve( nftInst.address, web3.utils.toWei("100000000","ether") , {from:accounts[0]});
        console.log(JSON.stringify( r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");

        let AMOUNT = 3;
        console.log(`NFT : setArtWork( ${ AMOUNT } , "Sperm King" , ${ NFT_KING_ARTWORK } ) ->`)
        r = await nftInst.setArtwork( AMOUNT , "Sperm King" , NFT_KING_ARTWORK );
        console.log(JSON.stringify(  r, null , 2 ) );

        console.log(`$ NFT: setStakeAddress( ${ stakeInst.address } ) ->`);
        r = await nftInst.setStakeAddress( stakeInst.address , {from: accounts[0] } ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log("$ NFT: canMint ->");
        r = await nftInst.canMint.call( ); 
        console.log( r );
        console.log("==========================================");       

        console.log(`$ NFT: mint() ->`);
        r = await nftInst.mint( { from: accounts[0] } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");
        let tokenA = r['receipt']['logs'][0]['args']['tokenId'];

        console.log(`token A: ${ tokenA }`);

        console.log(`$ Staking: addApprovedContract( ${ nftInst.address } ) ->`);
        r = await stakeInst.addApprovedContract( nftInst.address, { from: accounts[0] } );
        console.log(JSON.stringify( r, null , 2) );
        console.log("==========================================");
        
        console.log(`$ NFT: safeTransferFrom( ${ accounts[0]} , ${stakeInst.address} , ${tokenA} ) ->`);
        r = await nftInst.safeTransferFrom( accounts[0] , stakeInst.address , tokenA , { from : accounts[0] }); 
        console.log(JSON.stringify(  r['receipt']['logs'][1]['args'], null , 2 ) );
        console.log("==========================================");

        console.log(`$ STAKING: setMaxStaking( 0 ) ->`);
        r = await stakeInst.setMaxStaking( 0 , { from : accounts[0] } ); 
        console.log(JSON.stringify(  r , null , 2 ) );
        console.log("==========================================");

        console.log("$ NFT: canMint ->");
        r = await nftInst.canMint.call( ); 
        console.log( r );
        console.log("==========================================");       

        console.log(`$ NFT: mint() ->`);
        r = await nftInst.mint( { from: accounts[0] } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");
        let tokenB = r['receipt']['logs'][0]['args']['tokenId'];

        console.log(`$ NFT: safeTransferFrom( ${ accounts[0]} , ${stakeInst.address} , ${tokenA} ) ->`);
        r = await nftInst.safeTransferFrom( accounts[0] , stakeInst.address , tokenB , { from : accounts[0] }); 
        console.log(JSON.stringify(  r['receipt']['logs'][1]['args'], null , 2 ) );
        console.log("==========================================");
    });

    const test4 = it("test set airdrop", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");

        let nftInst = await NFT_KINGS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        let addrs = [ accounts[1], accounts[2], accounts[3] ];
        console.log(`$ NFT: setAirdrop( ${ addrs } ) ->`);
        r = await nftInst.setAirdrop( addrs , { from : accounts[0] } );
        console.log(JSON.stringify(  r , null , 2 ) );
        console.log("==========================================");

        console.log(`$ NFT: getAirdrop( ${ addr[0] } ) ->`);
        r = await nftInst.getAirdrop( addr[0] , { from : accounts[0] } );
        console.log(JSON.stringify(  r , null , 2 ) );
        console.log("==========================================");

        console.log(`$ NFT: getAirdrop( ${ addr[1] } ) ->`);
        r = await nftInst.getAirdrop( addr[0] , { from : accounts[0] } );
        console.log(JSON.stringify(  r , null , 2 ) );
        console.log("==========================================");

        console.log(`$ NFT: getAirdrop( ${ addr[2] } ) ->`);
        r = await nftInst.getAirdrop( addr[0] , { from : accounts[0] } );
        console.log(JSON.stringify(  r , null , 2 ) );
        console.log("==========================================");
    });

    const test5 = it("test nuking of the contract", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");

        let nftInst = await NFT_KINGS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        let COUNT = 0;
        let ART = [];
        console.log(`NFT : setArtWork( ${ COUNT } , "" , ${ ART } ) ->`)
        r = await nftInst.setArtwork( COUNT , "" , ART );
        console.log(JSON.stringify(  r, null , 2 ) );

        console.log(`$ NFT: setStakeAddress( ${ stakeInst.address } ) ->`);
        r = await nftInst.setStakeAddress( stakeInst.address , {from: accounts[0] } ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log("$ NFT: canMint ->");
        r = await nftInst.canMint.call( ); 
        console.log( r );
        console.log("==========================================");       

        let addrs = [ accounts[1], accounts[2], accounts[3] ];
        console.log(`$ NFT: setAirdrop( ${ addrs } ) ->`);
        r = await nftInst.setAirdrop( addrs , { from : accounts[0] } );
        console.log(JSON.stringify(  r , null , 2 ) );
        console.log("==========================================");

        console.log(`$ NFT: getAirdrop( ${ addr[0] } ) ->`);
        r = await nftInst.getAirdrop( addr[0] , { from : accounts[0] } );
        console.log(JSON.stringify(  r , null , 2 ) );
        console.log("==========================================");

        console.log(`$ NFT: mint() ->`);
        r = await nftInst.mint( { from: accounts[1] } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");
        let tokenB = r['receipt']['logs'][0]['args']['tokenId'];

    });

    const test6 = it("test nonOwner setting tokenAddress", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");

        let nftInst = await NFT_KINGS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        let tokenInst = await Token.deployed();
        assertAddress( tokenInst.address );
        console.log(`TOKEN instance@: ${ tokenInst.address }`);

        console.log(`$ NFT: setTokenAddress( ${ tokenInst.address } ) ->`);
        r = await nftInst.setTokenAddress( tokenInst.address , {from: accounts[0] })
        console.log(JSON.stringify(  r, null , 2 ) );

        console.log(`$ NFT: setTokenAddress( ${ tokenInst.address } ) ->`);
        r = await nftInst.setTokenAddress( tokenInst.address , {from: accounts[1] })
        console.log(JSON.stringify(  r, null , 2 ) );
    });

    const test7 = it("test nonOwner setting stakeAddress", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");

        let nftInst = await NFT_KINGS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        let tokenInst = await Token.deployed();
        assertAddress( tokenInst.address );
        console.log(`TOKEN instance@: ${ tokenInst.address }`);

        console.log(`$ NFT: setStakeAddress( ${ tokenInst.address } ) ->`);
        r = await nftInst.setStakeAddress( tokenInst.address , {from: accounts[0] })
        console.log(JSON.stringify(  r, null , 2 ) );

        console.log(`$ NFT: setStakeAddress( ${ tokenInst.address } ) ->`);
        r = await nftInst.setStakeAddress( tokenInst.address , {from: accounts[1] })
        console.log(JSON.stringify(  r, null , 2 ) );
    });

    const test8 = it("test nonOwner setting baseURI", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");

        let nftInst = await NFT_KINGS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        let tokenInst = await Token.deployed();
        assertAddress( tokenInst.address );
        console.log(`TOKEN instance@: ${ tokenInst.address }`);

        let uri = "http://test.com/";
        console.log(`$ NFT: setBaseURI( ${ uri } ) ->`);
        r = await nftInst.setBaseURI( uri , {from: accounts[0] })
        console.log(JSON.stringify(  r, null , 2 ) );

        console.log(`$ NFT: setBaseURI( ${ uri } ) ->`);
        r = await nftInst.setBaseURI( uri , {from: accounts[1] })
        console.log(JSON.stringify(  r, null , 2 ) );
    });

    const test9 = it("test nonOwner setting airdrop", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");

        let nftInst = await NFT_KINGS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        let tokenInst = await Token.deployed();
        assertAddress( tokenInst.address );
        console.log(`TOKEN instance@: ${ tokenInst.address }`);

        let addrs = [ accounts[1], accounts[2], accounts[3] ];
        console.log(`$ NFT: setAirdrop( ${ addrs } ) ->`);
        r = await nftInst.setAirdrop( addrs , { from : accounts[0] } );
        console.log(JSON.stringify(  r , null , 2 ) );
        console.log("==========================================");

        console.log(`$ NFT: setAirdrop( ${ addrs } ) ->`);
        r = await nftInst.setAirdrop( addrs , { from : accounts[1] } );
        console.log(JSON.stringify(  r , null , 2 ) );
        console.log("==========================================");
    });

    const test10 = it("test nonOwner setting price", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");

        let nftInst = await NFT_KINGS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        let tokenInst = await Token.deployed();
        assertAddress( tokenInst.address );
        console.log(`TOKEN instance@: ${ tokenInst.address }`);

        let price = "20000000000000000";
        console.log(`$ NFT: setPrice( ${ price } ) ->`);
        r = await nftInst.setPrice( price , {from: accounts[0] })
        console.log(JSON.stringify(  r, null , 2 ) );
    
        console.log(`$ NFT: setPrice( ${ price } ) ->`);
        r = await nftInst.setPrice( price , {from: accounts[1] })
        console.log(JSON.stringify(  r, null , 2 ) );
    });

    const test11 = it("test nuking of the contract", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");

        let nftInst = await NFT_KINGS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        let COUNT = 0;
        let ART = [""];
        console.log(`NFT : setArtWork( ${ COUNT } , "" , ${ ART } ) ->`)
        r = await nftInst.setArtwork( COUNT , "" , ART );
        console.log(JSON.stringify(  r, null , 2 ) );
        
        console.log(`NFT : setArtWork( ${ COUNT } , "" , ${ ART } ) ->`)
        r = await nftInst.setArtwork( COUNT , "" , ART, {from:accounts[1]} );
        console.log(JSON.stringify(  r, null , 2 ) );

    });

});
*/



contract("NFT Pixels", (accounts) => {
/*    const test0 = it("should fail to mint because no art or stake address", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");
        let r;
        let tokenInst = await Token.deployed();
        assertAddress( tokenInst.address );
        console.log(`TOKEN instance@: ${ tokenInst.address }`);

        let nftInst = await NFT_PXLS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        console.log(`$ ECR20 : faucet(${ accounts[0] }) ->`);
        r = await tokenInst.faucet( {from:accounts[0]} );
        console.log( web3.utils.fromWei( r['receipt']['logs'][0]['args']['value'] , "ether") );
        console.log("==========================================");

        console.log("$ NFT: canMint ->");
        r = await nftInst.canMint.call( ); 
        console.log( r );
        console.log("==========================================");       

        console.log(`$ NFT: mint() ->`);
        r = await nftInst.mint( { from: accounts[0] } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");
    });
*/
    const test1 = it("should test setting artwork", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");
        let r;
        let tokenInst = await Token.deployed();
        assertAddress( tokenInst.address );
        console.log(`TOKEN instance@: ${ tokenInst.address }`);

        let nftInst = await NFT_PXLS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        let AMOUNT = 12000;
        let PIXELS = [ BODIES , EYES , MOUTHS ]; 
        console.log(`$ NFT: setArtWork( ${ AMOUNT} , pixels , name ) ->`);
        r = await nftInst.setArtwork( AMOUNT, PIXELS , "sperm" , {from: accounts[0] })
        console.log(JSON.stringify(  r, null , 2 ) );

        console.log(`$ NFT: set Airdrop ->`);
        r = await nftInst.setAirdrop( [ accounts[2] ] , { from : accounts[0] } );
        console.log(JSON.stringify(  r , null , 2 ) );
        console.log("==========================================");

        console.log(`$ NFT: mint ->`);
        r = await nftInst.mint( { from : accounts[2] } );
        console.log(JSON.stringify(  r , null , 2 ) );
        console.log("==========================================");

        let tkn = r['receipt']['logs'][0]['args']['tokenId'];

        console.log(`$ NFT: tokenURI( 1 ) ->`);
       r = await nftInst.tokenURI.call( tkn ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");
        
        
      //  console.log(`$ NFT: indexToBodyType( 1 ) ->`);
      //  r = await nftInst.indexToBodyType( 1 , {from: accounts[0] })
      //  console.log(JSON.stringify(  r, null , 2 ) );
    
    
    
    
    });

/*
    const test2 = it("should fail to mint because no stake address", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");
        let r;
        let tokenInst = await Token.deployed();
        assertAddress( tokenInst.address );
        console.log(`TOKEN instance@: ${ tokenInst.address }`);

        let nftInst = await NFT_PXLS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        console.log(`$ ECR20 : faucet(${ accounts[0] }) ->`);
        r = await tokenInst.faucet( {from:accounts[0]} );
        console.log( web3.utils.fromWei( r['receipt']['logs'][0]['args']['value'] , "ether") );
        console.log("==========================================");

        let AMOUNT = 12000;
        let PIXELS = [ BODIES , EYES , MOUTHS ]; 
        console.log(`$ NFT: setArtWork( ${ AMOUNT} , pixels , name ) ->`);
        r = await nftInst.setArtwork( AMOUNT, PIXELS , "sperm" , {from: accounts[0] })
        console.log(JSON.stringify(  r, null , 2 ) );

        console.log("$ NFT: canMint ->");
        r = await nftInst.canMint.call( ); 
        console.log( r );
        console.log("==========================================");       

        console.log(`$ NFT: mint() ->`);
        r = await nftInst.mint( { from: accounts[0] } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");
    });

    const test3 = it("should fail to mint after 2 because of season end", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");
        let r;
        let tokenInst = await Token.deployed();
        assertAddress( tokenInst.address );
        console.log(`TOKEN instance@: ${ tokenInst.address }`);

        let nftInst = await NFT_PXLS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        let stakeInst = await Staking.deployed();
        assertAddress( stakeInst.address );
        console.log(`STAKING instance @: ${ stakeInst.address }`);
        console.log("==========================================");

        console.log(`$ ECR20 : faucet(${ accounts[0] }) ->`);
        r = await tokenInst.faucet( {from:accounts[0]} );
        console.log( web3.utils.fromWei( r['receipt']['logs'][0]['args']['value'] , "ether") );
        console.log("==========================================");

        console.log(`$ ECR20 : approve(${ nftInst.address } , ${ web3.utils.toWei("100000000","ether") } , {from: ${accounts[0]} }) ->`);
        r = await tokenInst.approve( nftInst.address , web3.utils.toWei("100000000","ether") , {from:accounts[0]});
        console.log(JSON.stringify( r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");

        let AMOUNT = 2;
    
        console.log(`$ NFT: setArtWork( ${ AMOUNT} , body, name, eye, mouth ) ->`);
        r = await nftInst.setArtwork( AMOUNT, [ BODIES , EYES , MOUTHS ] , "sperm" , {from: accounts[0] })
        console.log(JSON.stringify(  r, null , 2 ) );

        console.log(`$ NFT: setStakeAddress( ${ stakeInst.address } ) ->`);
        r = await nftInst.setStakeAddress( stakeInst.address , {from: accounts[0] } ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log("$ NFT: canMint ->");
        r = await nftInst.canMint.call( ); 
        console.log( r );
        console.log("==========================================");       

        console.log(`$ NFT: mint() ->`);
        r = await nftInst.mint( { from: accounts[0] } );
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");
        console.log("$ NFT: canMint ->");
        r = await nftInst.canMint.call( ); 
        console.log( r );
        console.log("==========================================");       

        console.log(`$ NFT: mint() ->`);
        r = await nftInst.mint( { from: accounts[0] } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");

        console.log("$ NFT: canMint ->");
        r = await nftInst.canMint.call( ); 
        console.log( r );
        console.log("==========================================");       

        console.log(`$ NFT: mint() ->`);
        r = await nftInst.mint( { from: accounts[0] } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");
    });
       
    const test4 = it("should fail to stake, as stake max is set to 0", async (  ) => {
        console.log("****************************************************************");
        console.log("****************************************************************");
        let r;
        let tokenInst = await Token.deployed();
        assertAddress( tokenInst.address );
        console.log(`TOKEN instance@: ${ tokenInst.address }`);

        let nftInst = await NFT_PXLS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        let stakeInst = await Staking.deployed();
        assertAddress( stakeInst.address );
        console.log(`STAKING instance @: ${ stakeInst.address }`);
        console.log("==========================================");

        console.log(`$ ECR20 : faucet(${ accounts[0] }) ->`);
        r = await tokenInst.faucet( {from:accounts[0]} );
        console.log( web3.utils.fromWei( r['receipt']['logs'][0]['args']['value'] , "ether") );
        console.log("==========================================");
        console.log(`$ ECR20 : approve( ${ nftInst.address } , ${ web3.utils.toWei("100000000","ether") } , {from:${accounts[0]}}) ->`);
        r = await tokenInst.approve( nftInst.address, web3.utils.toWei("100000000","ether") , {from:accounts[0]});
        console.log(JSON.stringify( r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");

        let AMOUNT = 3;
    
        let PIXELS = [ BODIES , EYES , MOUTHS ] ;
        console.log("$ NFT: setArtWork( 12000, pixels, name ) ->");
        r = await nftInst.setArtwork( AMOUNT, PIXELS , "sperm" , {from: accounts[0] })
        console.log(JSON.stringify( r, null , 2) );
        console.log("==========================================");

        console.log(`$ NFT: setStakeAddress( ${ stakeInst.address } ) ->`);
        r = await nftInst.setStakeAddress( stakeInst.address , {from: accounts[0] } ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log("$ NFT: canMint ->");
        r = await nftInst.canMint.call( ); 
        console.log( r );
        console.log("==========================================");       

        console.log(`$ NFT: mint() ->`);
        r = await nftInst.mint( { from: accounts[0] } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");
        let tokenA = r['receipt']['logs'][0]['args']['tokenId'];

        console.log(`token A: ${ tokenA }`);

        console.log(`$ Staking: addApprovedContract( ${ nftInst.address } ) ->`);
        r = await stakeInst.addApprovedContract( nftInst.address, { from: accounts[0] } );
        console.log(JSON.stringify( r, null , 2) );
        console.log("==========================================");
        
        console.log(`$ NFT: safeTransferFrom( ${ accounts[0]} , ${stakeInst.address} , ${tokenA} ) ->`);
        r = await nftInst.safeTransferFrom( accounts[0] , stakeInst.address , tokenA , { from : accounts[0] }); 
        console.log(JSON.stringify(  r['receipt']['logs'][1]['args'], null , 2 ) );
        console.log("==========================================");

        console.log(`$ STAKING: setMaxStaking( 0 ) ->`);
        r = await stakeInst.setMaxStaking( 0 , { from : accounts[0] } ); 
        console.log(JSON.stringify(  r , null , 2 ) );
        console.log("==========================================");

        console.log("$ NFT: canMint ->");
        r = await nftInst.canMint.call( ); 
        console.log( r );
        console.log("==========================================");       

        console.log(`$ NFT: mint() ->`);
        r = await nftInst.mint( { from: accounts[0] } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");
        let tokenB = r['receipt']['logs'][0]['args']['tokenId'];

        console.log(`$ NFT: safeTransferFrom( ${ accounts[0]} , ${stakeInst.address} , ${tokenA} ) ->`);
        r = await nftInst.safeTransferFrom( accounts[0] , stakeInst.address , tokenB , { from : accounts[0] }); 
        console.log(JSON.stringify(  r['receipt']['logs'][1]['args'], null , 2 ) );
        console.log("==========================================");
    });*/
});




/*
contract("NFT + Token + Marketplace", (accounts) => {
    //account #0 is the contract owner
    console.log("=========================================="); 
    console.log( `Accounts: ${JSON.stringify( accounts, null,2)}`);
    console.log("==========================================");

    const testECR20 = it("should test the token", async (  ) => {
        let r;
        let tokenInst = await Token.deployed();
        assertAddress( tokenInst.address );
        console.log(`TOKEN instance@: ${ tokenInst.address }`);

        let nftInst = await NFT_PXLS.deployed();
        console.log(`NFT instance@: ${ nftInst.address }`);
        assertAddress( nftInst.address );

        let marketInst = await Market.deployed();
        assertAddress( marketInst.address );
        console.log(`MARKET instance @: ${ marketInst.address }`);

        let stakeInst = await Staking.deployed();
        assertAddress( stakeInst.address );
        console.log(`STAKING instance @: ${ stakeInst.address }`);
        console.log("==========================================");

        console.log(`$ ECR20: totalSupply( ) ->`);
        r = await tokenInst.totalSupply();
        console.log(web3.utils.fromWei( r , "ether") );
        console.log("==========================================");

        console.log(`$ ECR20 : faucet(${ accounts[0] }) ->`);
        r = await tokenInst.faucet( {from:accounts[0]} );
        console.log( web3.utils.fromWei( r['receipt']['logs'][0]['args']['value'] , "ether") );
        console.log("==========================================");

        console.log(`$ ECR20 : faucet(${ accounts[0] }) ->`);
        r = await tokenInst.faucet( {from:accounts[0]} );
        console.log( web3.utils.fromWei( r['receipt']['logs'][0]['args']['value'] , "ether") );
        console.log("==========================================");


        console.log(`$ ECR20 : ballanceOf(${ accounts[0] }) ->`);
        let balance1 = await tokenInst.balanceOf.call( accounts[0] );
        console.log(web3.utils.fromWei( balance1 , "ether" ) );
        console.log("==========================================");




        console.log(`$ ECR20 : ballanceOf(${ accounts[1] }) ->`);
        let balance2 = await tokenInst.balanceOf.call( accounts[1] );
        console.log(web3.utils.fromWei( balance2 , "ether" ) );
        console.log("==========================================");

        console.log(`$ ECR20 (contract) : ballanceOf(${ tokenInst.address }) ->`);
        balance2 = await tokenInst.balanceOf.call( tokenInst.address );
        console.log(web3.utils.fromWei( balance2 , "ether" ) );
        console.log("==========================================");


        console.log(`$ ECR20 : faucet(${ accounts[1] }) ->`);
        r = await tokenInst.faucet( {from:accounts[1]} );
        console.log( web3.utils.fromWei( r['receipt']['logs'][0]['args']['value'] , "ether") );
        console.log("==========================================");

        console.log(`$ ECR20 : ballanceOf(${ accounts[1] }) ->`);
        balance2 = await tokenInst.balanceOf.call( accounts[1] );
        console.log(web3.utils.fromWei( balance2 , "ether" ) );
        console.log("==========================================");

        console.log(`$ ECR20 : faucet(${ accounts[1] }) ->`);
        r = await tokenInst.faucet( {from:accounts[1]} );
        console.log( web3.utils.fromWei( r['receipt']['logs'][0]['args']['value'] , "ether") );
        console.log("==========================================");

        console.log(`$ ECR20 : ballanceOf(${ accounts[1] }) ->`);
        balance2 = await tokenInst.balanceOf.call( accounts[1] );
        console.log(web3.utils.fromWei( balance2 , "ether" ) );
        console.log("==========================================");


        console.log(`$ ECR20 : transfer(${ accounts[1] } , ${ web3.utils.toWei("100.5","ether") }) ->`);
        r = await tokenInst.transfer( accounts[1] , web3.utils.toWei("100.5","ether") ); //Works because default account is token owner
        console.log(JSON.stringify( r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");

        console.log(`$ ECR20 : transfer(${ accounts[4] } , ${ web3.utils.toWei("100.5","ether") }) ->`);
        r = await tokenInst.transfer( accounts[4] , web3.utils.toWei("100.5","ether") ); //Works because default account is token owner
        console.log(JSON.stringify( r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");

        console.log(`$ ECR20 : approve(${ accounts[0] } , ${ web3.utils.toWei("10.5","ether") } , {from:${accounts[1]}}) ->`);
        r = await tokenInst.approve( accounts[0] , web3.utils.toWei("10.5","ether") , {from:accounts[1]});
        console.log(JSON.stringify( r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");
        console.log(`$ ECR20 : allowance(${ accounts[1] } , ${accounts[0]}) ->`);
        r = await tokenInst.allowance.call(accounts[1] , accounts[0] );
        console.log(web3.utils.fromWei( r , "ether" ) );
        console.log("==========================================");
        console.log(`$ ECR20 : transferFrom(${ accounts[1] } , ${accounts[0]}, ${ web3.utils.toWei("10.5","ether") }) ->`);
        r = await tokenInst.transferFrom( accounts[1] , accounts[2] , web3.utils.toWei("10.5","ether") , {from: accounts[0] } );
        console.log(JSON.stringify( r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");

        console.log(`$ ECR20 : ballanceOf(${ accounts[0] }) ->`);
        r = await tokenInst.balanceOf.call( accounts[0] );
        console.log(web3.utils.fromWei( r , "ether" ) );
        console.log("==========================================");

        console.log(`$ ECR20 : ballanceOf(${ accounts[1] }) ->`);
        r = await tokenInst.balanceOf.call( accounts[1] );
        console.log(web3.utils.fromWei( r , "ether" ) );
        console.log("==========================================");

        console.log(`$ ECR20 : ballanceOf(${ accounts[2] }) ->`);
        r = await tokenInst.balanceOf.call( accounts[2] );
        console.log(web3.utils.fromWei( r , "ether" ) );

        console.log("==========================================");
        console.log("++++++++++++++++++++++++++++++++++++++++++");
        console.log("==========================================");

        let AMOUNT = 12000
        let PIXELS = [ BODIES , EYES , MOUTHS ] ;
        console.log("$ NFT: setArtWork( 12000, pixels, name ) ->");
        r = await nftInst.setArtwork( AMOUNT, PIXELS , "sperm" , {from: accounts[0] })
        console.log(JSON.stringify( r, null , 2) );
        console.log("==========================================");

        console.log("$ NFT: _price ->");
        r = await nftInst._price.call( ); 
        console.log(JSON.stringify(  web3.utils.fromWei(r,"ether") , null , 2 ) );
        console.log("==========================================");

        console.log("$ NFT: setPrice( 6000000 ) ->");
        r = await nftInst.setPrice( web3.utils.toWei("0.1","ether" ) ,{ from: accounts[0] }); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log("$ NFT: getPrice ->");
        r = await nftInst.getPrice.call( ); 
        console.log(JSON.stringify(  web3.utils.fromWei(r,"ether") , null , 2 ) );
        console.log("==========================================");

        console.log(`$ NFT: walletOfOwner( ${ accounts[0] } ) ->`);
        r = await nftInst.walletOfOwner.call( accounts[0] ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log(`$ NFT: setStakeAddress( ${ stakeInst.address } ) ->`);
        r = await nftInst.setStakeAddress( stakeInst.address , { from: accounts[0] } ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");


        console.log(`$ NFT: set Airdrop ->`);
        r = await nftInst.setAirdrop( [ accounts[2] ] , { from : accounts[0] } );
        console.log(JSON.stringify(  r , null , 2 ) );
        console.log("==========================================");


        console.log(`$ NFT: mint() ->`);
        r = await nftInst.mint( { from: accounts[2] } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");

        r = await tokenInst.approve( nftInst.address , web3.utils.toWei("100","ether") , {from:accounts[1]});
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );

        r = await tokenInst.allowance.call(accounts[1] , nftInst.address );
        console.log(JSON.stringify( web3.utils.fromWei( r , "ether") , null , 2 ) );

        console.log(`$ NFT: mint() ->`);
        r = await nftInst.mint( { from: accounts[1] } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");

        console.log(`$ NFT: mint() ->`);
        r = await nftInst.mint( { from: accounts[1] } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");

        console.log(`$ ECR20 : ballanceOf(${ stakeInst.address }) ->`);
        r = await tokenInst.balanceOf.call( stakeInst.address );
        console.log(web3.utils.fromWei( r , "ether" ) );
        console.log("==========================================");

        //console.log(`$ NFT: tokenURI( 1 ) ->`);
        //r = await nftInst.tokenURI.call( 1 ); 
        //console.log(JSON.stringify(  r, null , 2 ) );
        //console.log("==========================================");
        
        
        console.log(`$ NFT: walletOfOwner( ${ accounts[1] } ) ->`);
        r = await nftInst.walletOfOwner.call( accounts[1] ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log("==========================================");
        console.log("++++++++++++++++++++++++++++++++++++++++++");
        console.log("==========================================");

        let tkn = r[0];
        console.log(`$ NFT: safeTransferFrom( ${ accounts[1]} , ${marketInst.address} , ${tkn}) ->`);
        r = await nftInst.safeTransferFrom( accounts[1] , marketInst.address , tkn , { from : accounts[1] }); 
        console.log(JSON.stringify(  r['receipt']['logs'][1]['args'], null , 2 ) );
        console.log("==========================================");

        console.log(`$ MARKET: setMarketWallet( ${ accounts[3] } ) ->`);
        r = await marketInst.setMarketWallet( accounts[3] ,{ from: accounts[0] } ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log(`$ MARKET: auctionTimePeriod ->`);
        r = await marketInst.auctionTimePeriod.call( ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log(`$ MARKET: getAuctionByToken( ${ nftInst.address  } , ${tkn} ) ->`);
        r = await marketInst.getAuctionByToken( nftInst.address , tkn ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log(`$ MARKET: getTokensOnSale( ${ nftInst.address  } , ${ accounts[1] } ) ->`);
        r = await marketInst.getTokensOnSale.call( nftInst.address , accounts[1] ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");
        let _auctionID = r[0];

        console.log(`$ MARKET: getAllTokensOnSale( ${ nftInst.address } ) ->`);
        r = await marketInst.getAllTokensOnSale.call( nftInst.address ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log(`$ MARKET: getAuction( ${ r[0] } ) ->`);
        r = await marketInst.getAuction.call( r[0] ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log(`$ MARKET: setBuyNow( ${ _auctionID } , 0.1  ) ->`);
        r = await marketInst.setBuyNow( _auctionID , web3.utils.toWei("0.1","ether") , { from: accounts[1] } ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log(`$ MARKET: getAuction( ${ _auctionID } ) ->`);
        r = await marketInst.getAuction.call( _auctionID ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log(`$ MARKET: payNow( ${ _auctionID } ) ->`);
        r = await marketInst.payNow( _auctionID , {from: accounts[4], value : web3.utils.toWei("0.1","ether") } ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");

        console.log(`$ NFT: walletOfOwner( ${ accounts[1] } ) ->`);
        r = await nftInst.walletOfOwner.call( accounts[4] ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log(`$ NFT: safeTransferFrom( ${ accounts[4]} , ${marketInst.address} , ${tkn} ) ->`);
        r = await nftInst.safeTransferFrom( accounts[4] , marketInst.address , tkn , { from : accounts[4] }); 
        console.log(JSON.stringify(  r['receipt']['logs'][1]['args'], null , 2 ) );
        console.log("==========================================");

        console.log(`$ MARKET: getAllTokensOnSale( ${ nftInst.address } ) ->`);
        r = await marketInst.getAllTokensOnSale.call( nftInst.address ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");
        _auctionID = r[0];

        console.log(`$ MARKET: maxBidChange ->`);
        r = await marketInst.maxBidChange.call(); 
        console.log(JSON.stringify(  web3.utils.fromWei( r,"ether") , null , 2 ) );
        console.log("==========================================");

        console.log(`$ MARKET: setBid( ${ _auctionID } ) ->`);
        r = await marketInst.setBid( _auctionID , web3.utils.toWei("0.2","ether") , {from: accounts[2]} ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log(`$ MARKET: getAuction( ${ _auctionID } ) ->`);
        r = await marketInst.getAuction.call( _auctionID ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        //   console.log(`$ MARKET: reNewAuction( ${ _auctionID } ) ->`);
        //   r = await marketInst.reNewAuction( _auctionID, {from:accounts[4]} ); 
        //   console.log(JSON.stringify(  r, null , 2 ) );
        //   console.log("==========================================");

        console.log(`$ MARKET: getAuction( ${ _auctionID } ) ->`);
        r = await marketInst.getAuction.call( _auctionID ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log(`$ MARKET: getWonAuctions( ${ nftInst.address } , ${ accounts[2]} ) ->`);
        r = await marketInst.getWonAuctions( nftInst.address , accounts[2] ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        
      //  console.log(`$ MARKET: payForWonAuction( ${ _auctionID } ) ->`);
      //  r = await marketInst.payForWonAuction( _auctionID , {from: accounts[2], value: web3.utils.toWei("0.2","ether") } ); 
      //  console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
      //  console.log("==========================================");

      //  console.log(`$ NFT: walletOfOwner( ${ accounts[2] } ) ->`);
      //  r = await nftInst.walletOfOwner.call( accounts[2] ); 
      //  console.log(JSON.stringify(  r, null , 2 ) );
      //  console.log("==========================================");

      //  console.log(`$ NFT: safeTransferFrom( ${ accounts[2]} , ${marketInst.address} , ${tkn} ) ->`);
      //  r = await nftInst.safeTransferFrom( accounts[2] , marketInst.address , tkn , { from : accounts[2] }); 
      //  console.log(JSON.stringify(  r['receipt']['logs'][1]['args'], null , 2 ) );
      //  console.log("==========================================");

      //  console.log(`$ MARKET: getAllTokensOnSale( ${ nftInst.address } ) ->`);
      //  r = await marketInst.getAllTokensOnSale.call( nftInst.address ); 
      //  console.log(JSON.stringify(  r, null , 2 ) );
      //  console.log("==========================================");
      //  _auctionID = r[0];
        

        console.log(`$ MARKET: setBuyNow( ${ _auctionID } , 0.3  ) ->`);
        r = await marketInst.setBuyNow( _auctionID , web3.utils.toWei("0.3","ether") , { from: accounts[4] } ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log(`$ MARKET: withdrawAuction( ${ _auctionID } ) ->`);
        r = await marketInst.withdrawAuction( _auctionID , {from: accounts[4]} ); 
        console.log(JSON.stringify(  r['receipt']['logs'][0]['args'], null , 2 ) );
        console.log("==========================================");

        console.log("==========================================");
        console.log("++++++++++++++++++++++++++++++++++++++++++");
        console.log("==========================================");

        console.log(`$ NFT: safeTransferFrom( ${ accounts[4]} , ${stakeInst.address} , ${tkn} ) ->`);
        r = await nftInst.safeTransferFrom( accounts[4] , stakeInst.address , tkn , { from : accounts[4] }); 
        console.log(JSON.stringify(  r['receipt']['logs'][1]['args'], null , 2 ) );
        console.log("==========================================");

        console.log(`$ STAKING: allStaked( ${ accounts[4] } ) ->`);
        r = await stakeInst.allStaked.call( accounts[4] ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");
        let stakeId = r[0];

        console.log(`$ STAKING: getStakeDetails( ${ stakeId } ) ->`);
        r = await stakeInst.getStakeDetails.call( stakeId ,{from:accounts[4]}); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log(`$ STAKING: stakeTokenRewards( ${ stakeId } ) ->`);
        r = await stakeInst.stakeTokenRewards.call( stakeId ,{from:accounts[4]}); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log(`$ STAKING: getStakeDetailsByToken( ${ accounts[4] } , ${ nftInst.address  } , ${ tkn } ) ->`);
        r = await stakeInst.getStakeDetailsByToken.call( accounts[4] , nftInst.address ,  tkn , {from:accounts[4] } ); 
        console.log(JSON.stringify(  r, null , 2 ) );
        console.log("==========================================");

        console.log(`$ STAKING: stakeClaimRewards( ${ stakeId } ) ->`);
        r = await stakeInst.stakeClaimRewards( stakeId , {from:accounts[4]} ); 
        console.log(JSON.stringify(  r['receipt'].logs[0]['args'], null , 2 ) );
        console.log("==========================================");

        console.log(`$ ECR20 : ballanceOf(${ accounts[4] }) ->`);
        r = await tokenInst.balanceOf.call( accounts[4] );
        console.log(web3.utils.fromWei( r , "ether" ) );
        console.log("==========================================");

    });
});
*/
var sleep = (delay) => new Promise( (resolve) => setTimeout( resolve, delay));

var assertAddress = (address) => {
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
};

var assertRevert = async (promise, message) => {
    let noFailureMessage;

    try {
        await promise;

        if (!message) { 
            noFailureMessage = 'Expected revert not received' 
        } else {
            noFailureMessage = message;
        }

        assert.fail();
    } catch (error) {
        if (noFailureMessage) {
            assert.fail(0, 1, message);
        }
        const revertFound = error.message.search('revert') >= 0;
        assert(revertFound, `Expected "revert", got ${error} instead`);
    }
};
