// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


interface IDonorRegistration {
    function registerDonor() external;
    function isDonorRegistered(address _donor) external view returns (bool);
}