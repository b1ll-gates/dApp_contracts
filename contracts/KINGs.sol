// SPDX-License-Identifier: MIT
pragma abicoder v2;
pragma solidity >=0.6.0 <0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./NFTLibrary.sol";
import "./NwBTCNFT.sol";

contract KINGs is ERC721, NwBTCNFT, Ownable , ReentrancyGuard {
  
    mapping(address => bool) public airdrop;
    mapping(uint256 => Collection) public indexToCollection;
    mapping(uint256 => bool) hashToMinted;
    mapping(uint256 => uint256) public tokenIdToHash;
    
    string public _baseURI = "https://gateway.pinata.cloud/ipfs/";

    IERC20 public _nwBTCToken;
    address payable public _stakeAddress = address(0);
    uint256 public _price = 2000000000000000000000000;
    
    struct Collection {
        string name;
        uint256 start;
        uint256 amount;
        string[] urls;
    }
 
    using Counters for Counters.Counter;
    Counters.Counter private _collection;
    Counters.Counter private _tokenIds;
 
    constructor( IERC20 _token ) ERC721("Sperm Kings", "KINGs") {
        _nwBTCToken = _token;    
    }

    ////////////////////////////////////////////////////////USER

    function getAirdrop( address addr ) external view returns(bool) {
        return airdrop[ addr ];
    }
   
    function walletOfOwner(address _wallet)
        external
        view
        override
        returns (uint256[] memory ) 
    {
        uint256 tokenCount = balanceOf(_wallet);

        uint256[] memory tokensId = new uint256[](tokenCount);
        for (uint256 i; i < tokenCount; i++) {
            tokensId[i] = tokenOfOwnerByIndex(_wallet, i);
        }
        return tokensId;
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(_tokenId), "The token does not exist");

        uint256 hash = tokenIdToHash[ _tokenId ];

        uint8 _energy = uint8( (hash>>24)&0xff );
        uint8 _voice = uint8( (hash>>32)&0xff );
        uint8 _heart = uint8( (hash>>40)&0xff );
        
        string memory metaString = string(
            abi.encodePacked(
                '"attributes":','{"voice":',
                    NFTLibrary.toString( _voice ),
                    ',"heart":',
                    NFTLibrary.toString( _heart ),
                    ',"energy":',
                    NFTLibrary.toString( _energy ), '}'
             ) );
        
        uint256 _season = hash & 0xff;
        uint256 _indexURL = ( ( hash >> 8 ) & 0xff ) % uint8( indexToCollection[ _season ].urls.length );

        uint256 num = _tokenId - indexToCollection[ _season ].start ;
        
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    NFTLibrary.encode(
                        bytes(
                            string(
                                abi.encodePacked(
                                    '{"name": "',indexToCollection[ _season ].name,' ',
                                        NFTLibrary.toString( num ),'/',
                                        NFTLibrary.toString( indexToCollection[ _season ].amount),
                                        '","description": "Freedom loving art", "image": "',
                                        _baseURI, indexToCollection[ _season ].urls[ _indexURL ],'",',
                                        metaString,"}"
                                )
                            )
                        )
                    )
                )
            );
    }

    function getPrice() external view override returns(uint256){
        return _price;
    }
    
    function canMint() external view override returns (bool){
        return ( ( ! (_stakeAddress == address( 0 ) ) ) && ( 0 < ( ( indexToCollection[ _collection.current() ].start + indexToCollection[ _collection.current() ].amount ) - _tokenIds.current() ) ) );
    }

    function getHash(uint256 season,  uint256 _t ,address _a , uint256 _c )
        internal view returns (uint256) {
        
        require(_c < 10);

        uint256 _hash = season;
        uint256 tmp;
        for (uint8 i = 1; i < 8; i++) {
            tmp = 
                uint256(
                    keccak256(
                        abi.encodePacked(
                            block.timestamp,
                            block.difficulty,
                            _t,
                            _a,
                            ( _c + i )
                        )
                    )
                ) % 0xFF;
            _hash |= uint256((tmp << ( i * 8 ) ));
        }
        return _hash;
    }

   function mint()
       external
        nonReentrant
        override {
    require( ( indexToCollection[ _collection.current() ].start + indexToCollection[ _collection.current() ].amount )  > (_tokenIds.current() ) , "Season has ended");
        require(_collection.current() > 0, "No default art");
        
        if ( airdrop[ msg.sender ] ) airdrop[ msg.sender ] = false;
        else {
            require( ! (_stakeAddress == address( 0 ) ), "Minting not yet allowed");
            require( _nwBTCToken.allowance( msg.sender, address(this) ) >= _price,"Insuficient Allowance");
            require(_nwBTCToken.transferFrom(msg.sender,_stakeAddress,_price),"transfer Failed");
        }
        _tokenIds.increment();

        tokenIdToHash[ _tokenIds.current() ] = getHash( _collection.current() , _tokenIds.current(), msg.sender, 0);
        hashToMinted[ tokenIdToHash[ _tokenIds.current() ] ] = true;
        _mint(msg.sender, _tokenIds.current());
  }

    ////////////////////////////////////////////////////////////OWNER
 
    function setTokenAddress( IERC20 _token ) onlyOwner external {
        _nwBTCToken = _token;
    }
    
    function setStakeAddress( address addr ) onlyOwner external {
        _stakeAddress = payable( addr );
    }
 
    function setBaseURI(string memory _base) onlyOwner external {
        _baseURI = _base;
    }
   
    function setAirdrop( address[] memory _recipients ) onlyOwner public returns (bool) {
        for (uint i = 0; i < _recipients.length; i++) {
            airdrop[ _recipients[ i ] ] = true;
        }
        return true;
    }

    function setPrice( uint256 v) onlyOwner external {
        _price = v;
    }
    
    function setArtwork( uint256 _amount, string memory _name, string[] memory _urls )
        external onlyOwner returns (uint256) {
        
        _collection.increment();
 
        Collection memory _struct = Collection({
            name : _name,
            start: _tokenIds.current(),
            amount: _amount,
            urls: _urls
        });

        indexToCollection[ _collection.current() ] = _struct;
        return _collection.current();
   }

}
