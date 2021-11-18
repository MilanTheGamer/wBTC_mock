// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WBTC is ERC20 {

    address public _owner;

    constructor() ERC20("Wrapped Bitcoin", "wBTC"){
        _owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner);
        _;
    }

    function burn(uint value) public onlyOwner {
        super._burn(_owner,value);
    }
}