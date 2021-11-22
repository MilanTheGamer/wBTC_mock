// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WBTC is ERC20 {

    address public _custodian;

    constructor(string memory name,string memory symbol) ERC20(name,symbol) {
        _custodian = msg.sender;
    }
}