// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IStudentVerification {
    function verifyStudent(address _student, address _school) external;
    function isStudentVerified(address _student) external view returns (bool);
}