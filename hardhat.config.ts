import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();



// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
    solidity: "0.8.4",
    networks: {
        goerli: {
            url: process.env.ALCHEMY_GOERLI_URL || "",
            accounts:
                process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
            gas: 100000000000,
        },
        ropsten: {
            url: process.env.ALCHEMY_ROPSTEN_URL || "",
            accounts:
                process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
            gas: 100000000000,
        },
        rinkeby: {
            url: process.env.ALCHEMY_RINKEBY_URL || "",
            accounts:
                process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
            gas: 100000000000,
        },
    },


    paths: { tests: "tests" },
};

export default config;