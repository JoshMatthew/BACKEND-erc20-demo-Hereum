pragma solidity >=0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Hereum is ERC20 {
    constructor() public ERC20("Hereum", "HRE") {
        uint256 tokenAmount = 999999 * (10**18);
        _mint(msg.sender, tokenAmount);
    }

    function getToken(uint256 _val) public {
        uint256 _tokenAmount = _val * 10**18;
        _mint(msg.sender, _tokenAmount);
    }
}
