#! /usr/bin/env node

const { Command } = require('commander');
const jsbgl = require('../jsbgl/src/jsbgl');
const utils = require('../utils')

async function main() {
  try {
    await jsbgl.asyncInit(globalThis);
  } catch (error) {
    console.log(error);
  }

  const testnetRegegx = /^(Testnet|tesnet|TestNet|test net|testNet)$/i;
  const mainnetRegex = /^(mainnet|Mainnet|MainNet|main net|nainNet)$/i;

  const program = new Command();
  program
    .name('bgld-cli')
    .description(
      'bgld-cli, - A cli utility for interracting with the Bitgesell Blockchain Network'
    )
    .version('1.0.0');

  /**
   * Command for all the address related operations
   * @param network | tesnet or mainnet
   */
  program
    .command('address')
    .description('Generate an an adress (base58 encoded)')
    .argument('--network')
    .action((network) => {
      console.log(network);
      const isTesnet = testnetRegegx.test(network);
      const isMainnet = mainnetRegex.test(network);
      console.log('isMainnet', isMainnet);

      if (isMainnet) {
        const address = new globalThis.Address();
        console.log('Genertated address for Mainnet(base58):', address.address);
        console.log('Private Key(hex):', address.privateKey.hex);
        utils.exportToJsonFile(address.address, {
          address,
          privateKey: address.privateKey.hex,
          testnet: address.testnet,
          compressed: address.compressed,
        });
      }
    });

  /**
   * Command  for all the wallet related operations
   * @param network | tesnet or mainnet
   */
  program
    .command('wallet')
    .description('Generate a Wallet')
    .argument('--network')
    .action((network) => {
      const isMainnet = mainnetRegex.test(network);

      if (isMainnet) {
        const wallet = new globalThis.Wallet({
          path_type: 'BIP84',
          testnet: false,
        });

        console.log(`Successfully generated wallet for ${network}: \n`);
        console.log('Wallet PrivateKey:', wallet.accountXPrivateKey);
        console.log('Wallet PrivateKey:', wallet.accountXPublicKey);
        console.log('Wallet seedphrase:', wallet.mnemonic);

        utils.exportToJsonFile('wallet', { wallet });
      }
    });



  /**
   * Command  for all the wallet related operations
   * @param network | tesnet or mainnet
   */
  program
    .command('transactions')
    .description('encode at transaction [WIP]')
    .argument('--network')
    .action((network) => {
      const isMainnet = mainnetRegex.test(network);

      if (isMainnet) {
        const wallet = new globalThis.Wallet({
          path_type: 'BIP84',
          testnet: false,
        });

        console.log(`Successfully generated wallet for ${network}: \n`);
        console.log('Wallet PrivateKey:', wallet.accountXPrivateKey);
        console.log('Wallet PrivateKey:', wallet.accountXPublicKey);
        console.log('Wallet seedphrase:', wallet.mnemonic);

        utils.exportToJsonFile('wallet', { wallet });
      }
    });

  

  program.parse();
}

main().catch((err) => {
  console.log(err);
  process.exit(1);
});
