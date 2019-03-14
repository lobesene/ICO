const Migrations = artifacts.require("Migrations");
const ROLES = artifacts.require("ROLES");
const ERC20 = artifacts.require("ERC20");

async function doDeploy(deployer) {
  await deployer.deploy(ROLES);
  await deployer.deploy(ERC20);

}


module.exports = (deployer) => {
  deployer.then(async () => {
       await doDeploy(deployer);
  });
};



