// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ISchoolVerification {
    function verifySchool(address _school) external;
    function isSchoolVerified(address _school) external view returns (bool);
}