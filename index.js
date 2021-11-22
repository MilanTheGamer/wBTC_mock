const Web3 = require("web3");
const fs = require("fs");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const WBTC = require("./build/contracts/WBTC.json");
const MultiSigWallet = require("./build/contracts/MultiSigWallet.json");

const mnemonic = fs.readFileSync(".secret").toString().trim();

const init = async () => {
    const provider = new HDWalletProvider(
        mnemonic,
        "https://ropsten.infura.io/v3/f2f1a76f9a9141eab1c40aea263fff28"
    );
    const web3 = new Web3(provider);

    const id = await web3.eth.net.getId();
    const wBTCContract = new web3.eth.Contract(
        WBTC.abi,
        WBTC.networks[id].address
    );
    const multiSigContract = new web3.eth.Contract(
        MultiSigWallet.abi,
        MultiSigWallet.networks[id].address
    );

    let owner = await wBTCContract.methods._owner().call();
    console.log(owner);

    // let balance = await contract.methods
    //     .check_balance("0xfa90e537d3240ceE77EeCE2913cB9d17b11E2931")
    //     .call();

    // console.log(balance);

    // //for testing
    // await contract.methods
    //     .test("0x3C9E5007AC6BB2CFd2Be108535Fb6F8d8489d709", "HELLO THERE")
    //     .call();

    // //Subscribe to test event
    // contract.events.Test((error, log) => {
    //     if (error) {
    //         console.log(error);
    //     }

    //     console.log(log);
    // });
};

init();
