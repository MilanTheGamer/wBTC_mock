const MulttiSigWallet = artifacts.require("MulttiSigWallet");
const { owners, numConfirmations } = require("../config/config");

module.exports = function (deployer) {
    deployer.deploy(MulttiSigWallet, owners, numConfirmations);
};
