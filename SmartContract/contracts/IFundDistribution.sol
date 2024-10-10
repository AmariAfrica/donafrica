// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IFundDistribution {
    function donate(uint256 _amount) external;
    function distributeFunds() external;
    function claimFunds() external;
    function getMonth(uint256 _timestamp) external pure returns (uint256);
}