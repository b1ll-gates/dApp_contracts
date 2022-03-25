// SPDX-License-Identifier: MIT
pragma abicoder v2;
pragma solidity >=0.6.0 <0.8.11;

//import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./NwBTCNFT.sol";
import "./NFTLibrary.sol";

contract PXLs is ERC721, NwBTCNFT, Ownable, ReentrancyGuard {

    struct Body {
        string name;
        uint256 start;
        uint256 amount;
        bytes[][3] pixels;
    }
  
    IERC20 public _nwBTCToken;
    address payable public _stakeAddress = address(0);
    uint256 public _price = 2000000000000000000000000;
    
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter public _bodyCount;
   
    mapping(uint256 => Body) public indexToBodyType;
    mapping(uint256 => uint256) public tokenIdToHash;
    mapping(address => bool) public airdrop;
    
    constructor( IERC20 _token  ) ERC721( "Crypto Pixels" , "PXLs" ) {
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
        require(_exists(_tokenId), "No token");

        string memory svgString;
        uint8[24][24] memory placedPixels;
                         
        uint256 hash = tokenIdToHash[ _tokenId ];

        uint8 bgR = uint8( (hash>>24)&0xff );
        uint8 bgB = uint8( (hash>>32)&0xff );
        uint8 bgG = uint8( (hash>>40)&0xff );
        
        uint256 _indexBody = hash & 0xff;

        for ( uint16 k = 0 ; k < 3 ; k++ ) {
            uint256 _index = ( ( hash >> ( 8 * k ) ) & 0xff ) % uint8( indexToBodyType[ _indexBody ].pixels[ k ].length );
            for ( uint16 j = 0; j < indexToBodyType[ _indexBody ].pixels[ k ][ _index ].length; j+=3 ) {
                uint8 x = uint8( indexToBodyType[ _indexBody ].pixels[ k ][ _index ][ j ] );
                uint8 y = uint8( indexToBodyType[ _indexBody ].pixels[ k ][ _index ][ j + 1 ] );
                placedPixels[x][y] = uint8( indexToBodyType[ _indexBody ].pixels[ k ][ _index ][ j + 2 ] ) + 1;
            }
        }
         
        for ( uint16 y = 0; y < 24; y++){
            for ( uint16 x = 0; x < 24; x++){
                if ( placedPixels[x][y] > 0 ) { 
                    svgString = string(
                        abi.encodePacked(
                            svgString,
                            "<rect class='c",NFTLibrary.toString(placedPixels[x][y] - 1),
                            "' x='",
                            NFTLibrary.toString( x ),
                            "' y='",
                            NFTLibrary.toString( y ),
                            "'/>"
                        )
                    );
                }
            }
        } 

        svgString = string(
            abi.encodePacked(
                '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 24 24" shape-rendering="crispEdges" style="background-color: rgba('
                , NFTLibrary.toString( bgR ) ,',', NFTLibrary.toString( bgB ) ,',', NFTLibrary.toString( bgG ) ,',0.2);"> ',
                svgString,
                "<style>rect{width:1px;height:1px;} .c0{fill:#FF0040}.c1{fill:#131313}.c2{fill:#1B1B1B}.c3{fill:#272727}.c4{fill:#3D3D3D}.c5{fill:#5D5D5D}.c6{fill:#858585}.c7{fill:#B4B4B4}.c8{fill:#FFFFFF}.c9{fill:#C7CfDD}.c10{fill:#92A1B9}.c11{fill:#657392}.c12{fill:#424C6E}.c13{fill:#2A2F4E}.c14{fill:#1A1932}.c15{fill:#0E071B}.c16{fill:#1C121C}.c17{fill:#0391F21}.c18{fill:#5D2C28}.c19{fill:#8A4836}.c20{fill:#BF6F4A}.c21{fill:#E69C69}.c22{fill:#F6CA9F}.c23{fill:#F9E6CF}.c24{fill:#EDAB50}.c25{fill:#E07438}.c26{fill:#C64524}.c27{fill:#8E251D}.c28{fill:#FF5000}.c29{fill:#ED7614}.c30{fill:#FFA214}.c31{fill:#FFC825}.c32{fill:#FFEB57}.c33{fill:#D3FC7E}.c34{fill:#99E65F}.c35{fill:#5AC54F}.c36{fill:#33984B}.c37{fill:#1E6F50}.c38{fill:#134C4C}.c39{fill:#0C2E44}.c40{fill:#00396D}.c41{fill:#0069AA}.c42{fill:#0098DC}.c43{fill:#00CDF9}.c44{fill:#0CF1FF}.c45{fill:#94FDFF}.c46{fill:#FDD2ED}.c47{fill:#F389F5}.c48{fill:#DB3FFD}.c49{fill:#7A09FA}.c50{fill:#3003D9}.c51{fill:#0C0293}.c52{fill:#03193F}.c53{fill:#3B1443}.c54{fill:#622461}.c55{fill:#93388F}.c56{fill:#CA52C9}.c57{fill:#C85086}.c58{fill:#F68187}.c59{fill:#F5555D}.c60{fill:#EA323C}.c61{fill:#C42430}.c62{fill:#891E2B}.c63{fill:#571C27}</style></svg>"
            )
        );

        uint256 num = _tokenId - indexToBodyType[ _indexBody ].start ;
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    NFTLibrary.encode(
                        bytes(
                            string(
                                abi.encodePacked(
                                    '{"name": "',indexToBodyType[ _indexBody ].name,' ',
                                        NFTLibrary.toString( num ),'/',
                                        NFTLibrary.toString( indexToBodyType[ _indexBody ].amount),
                                        '","description": "Freedom loving art", "image": "data:image/svg+xml;base64,',
                                        NFTLibrary.encode( bytes( svgString)),'"}'
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
        return ( ( ! (_stakeAddress == address( 0 ) ) ) && ( 0 < ( ( indexToBodyType[ _bodyCount.current() ].start + indexToBodyType[ _bodyCount.current() ].amount ) - _tokenIds.current() ) ) );
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
        public
        override
        nonReentrant
    {
        require( ( indexToBodyType[ _bodyCount.current() ].start + indexToBodyType[ _bodyCount.current() ].amount )  > (_tokenIds.current() ) , "Ended");
        require(_bodyCount.current() > 0, "No art");
        
         if ( airdrop[ msg.sender ] ) airdrop[ msg.sender ] = false;
         else {
            require( !( _stakeAddress == address( 0 ) ), "Minting not yet allowed");
            if ( _nwBTCToken.allowance( msg.sender, address(this) ) < _price ) revert( "Allowance" );
            if ( ! _nwBTCToken.transferFrom(msg.sender,_stakeAddress,_price) ) revert("Failed");
         }

        _tokenIds.increment();
        uint256 thisTokenId = _tokenIds.current();
 
        tokenIdToHash[thisTokenId] = getHash( _bodyCount.current() , thisTokenId, msg.sender, 0);
        
        _mint(msg.sender, thisTokenId);
    }

    ////////////////////////////////////////////////////////////OWNER

    function setTokenAddress( IERC20 _token ) onlyOwner external {
        _nwBTCToken = _token;
    }
    
    function setStakeAddress( address addr ) onlyOwner external {
        _stakeAddress = payable( addr );
    }
 
   function setAirdrop( address[] memory _recipients ) onlyOwner public {
        for (uint i = 0; i < _recipients.length; i++) {
            airdrop[ _recipients[ i ] ] = true;
        }
    }

    function setPrice( uint256 v) onlyOwner external {
        _price = v;
    }

    function setArtwork( uint256 _amount, bytes[][3] memory _pxls, string memory _name )
        external onlyOwner returns (uint256) {
        
        _bodyCount.increment();

        indexToBodyType[ _bodyCount.current() ] = Body({
            name : _name,
            start: _tokenIds.current(),
            amount: _amount,
            pixels: _pxls
        });
            return _bodyCount.current();
    }

    function getBL( uint256 _a ) public returns ( uint256 ) {
        return indexToBodyType[ _bodyCount.current() ].pixels[_a].length;
    
    }
        
    function getB( uint256 _a , uint256 _b ) public returns ( bytes memory ) {
        return indexToBodyType[ _bodyCount.current() ].pixels[_a][_b];
    }

}
