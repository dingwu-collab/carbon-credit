// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CarbonCreditToken is ERC20 {
    // 1. Constructor runs once when you create the token
    constructor() ERC20("Singapore Green Carbon", "SGC") {
        // 2. Mint 1,000,000 tokens to the wallet that deploys this contract
        // (In your case, the Bank or Registry wallet)
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}