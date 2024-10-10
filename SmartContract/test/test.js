const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DonorAfrica", function () {
  let usdcMock, donorAfrica, deployer, donor, school, student;

  beforeEach(async function () {
    [deployer, donor, school, student] = await ethers.getSigners();

    // Deploy usdcMock token
    const UsdcMock = await ethers.getContractFactory("usdcMock");
    usdcMock = await UsdcMock.deploy(ethers.utils.parseUnits("1000000", 18));
    await usdcMock.deployed();

    // Deploy DonorAfrica
    const DonorAfrica = await ethers.getContractFactory("DonorAfrica");
    donorAfrica = await DonorAfrica.deploy(usdcMock.address);
    await donorAfrica.deployed();
  });

//   it("Should allow a donor to register and donate", async function () {
//     // Donor registers
//     await donorAfrica.connect(donor).registerDonor();
//     expect(await donorAfrica.isDonorRegistered(donor.address)).to.equal(true);

//     // Approve USDC for donation
//     await usdcMock.connect(donor).approve(donorAfrica.address, ethers.utils.parseUnits("100", 18));

//     // Donate USDC
//     await donorAfrica.connect(donor).donate(ethers.utils.parseUnits("100", 18));
//     expect(await donorAfrica.totalDonations()).to.equal(ethers.utils.parseUnits("100", 18));
//   });


  describe("Donor Registration", function () {
    it("Should register a donor", async function () {
      await donorAfrica.connect(donor).registerDonor();
      expect(await donorAfrica.isDonorRegistered(donor.address)).to.equal(true);
    });

    it("Should not allow duplicate donor registration", async function () {
      await donorAfrica.connect(donor).registerDonor();
      await expect(donorAfrica.connect(donor).registerDonor()).to.be.revertedWith("Donor already registered");
    });
  });

  describe("School Verification", function () {
    it("Should register and verify a school", async function () {
      await donorAfrica.connect(school).registerSchool();
      expect(await donorAfrica.isSchoolVerified(school.address)).to.equal(true);
    });

    it("Should not allow duplicate school registration", async function () {
      await donorAfrica.connect(school).registerSchool();
      await expect(donorAfrica.connect(school).registerSchool()).to.be.revertedWith("School already verified");
    });
  });

  describe("Student Verification", function () {
    beforeEach(async function () {
      await donorAfrica.connect(school).registerSchool();
    });

    it("Should register and verify a student", async function () {
      await donorAfrica.connect(student).registerStudent(school.address);
      expect(await donorAfrica.isStudentVerified(student.address)).to.equal(true);
    });

    it("Should not allow duplicate student registration", async function () {
      await donorAfrica.connect(student).registerStudent(school.address);
      await expect(donorAfrica.connect(student).registerStudent(school.address)).to.be.revertedWith("Student already verified");
    });
  });

  describe("Donations", function () {
    beforeEach(async function () {
      await donorAfrica.connect(donor).registerDonor();
    });

    it("Should allow a registered donor to donate", async function () {
      await usdcMock.connect(donor).approve(donorAfrica.address, ethers.utils.parseUnits("100", 18));
      await donorAfrica.connect(donor).donate(ethers.utils.parseUnits("100", 18));
      expect(await donorAfrica.totalDonations()).to.equal(ethers.utils.parseUnits("100", 18));
      expect(await donorAfrica.donors(donor.address)).to.have.property("totalDonated", ethers.utils.parseUnits("100", 18));
    });

    it("Should not allow an unregistered donor to donate", async function () {
      await expect(donorAfrica.connect(deployer).donate(ethers.utils.parseUnits("100", 18))).to.be.revertedWith("Donor not registered");
    });
  });

  describe("Fund Distribution", function () {
    beforeEach(async function () {
      await donorAfrica.connect(donor).registerDonor();
      await donorAfrica.connect(school).registerSchool();
      await usdcMock.connect(donor).approve(donorAfrica.address, ethers.utils.parseUnits("100", 18));
      await donorAfrica.connect(donor).donate(ethers.utils.parseUnits("100", 18));
    });

    it("Should distribute funds to verified schools", async function () {
      await ethers.provider.send("evm_increaseTime", [30 * 24 * 60 * 60]); // Increase time by 30 days
      await donorAfrica.distributeFunds();
      expect(await donorAfrica.totalDonations()).to.equal(0);
      expect(await donorAfrica.schools(school.address)).to.have.property("totalFundsReceived", ethers.utils.parseUnits("100", 18));
    });

    it("Should not distribute funds before 30 days", async function () {
      await expect(donorAfrica.distributeFunds()).to.be.revertedWith("Distribution not due");
    });
  });

  describe("Fund Claiming", function () {
    beforeEach(async function () {
      await donorAfrica.connect(donor).registerDonor();
      await donorAfrica.connect(school).registerSchool();
      await donorAfrica.connect(student).registerStudent(school.address);
      await usdcMock.connect(donor).approve(donorAfrica.address, ethers.utils.parseUnits("100", 18));
      await donorAfrica.connect(donor).donate(ethers.utils.parseUnits("100", 18));
      await ethers.provider.send("evm_increaseTime", [30 * 24 * 60 * 60]); // Increase time by 30 days
      await donorAfrica.distributeFunds();
    });

    it("Should allow a verified student to claim funds", async function () {
      await donorAfrica.connect(student).claimFunds();
      expect(await donorAfrica.students(student.address)).to.have.property("fundsClaimed", 100);
    });

    it("Should not allow an unverified student to claim funds", async function () {
      await expect(donorAfrica.connect(deployer).claimFunds()).to.be.revertedWith("Student not verified");
    });
  });


  
});