# bgld-cli

<img src="Icon.png" style="height: 60px;"/>

A CLI tool for interacting with the Bitgesell blockchain network for managing:

- Addresses
- Private Keys
- Transactions (WIP)
- Wallets

## Installation

```sh
npm i -g bgld-cli # yarn add --global bgld-cli
```

## Usage

Basic help and `bgld-cli` version can be checked by simply typing the following on a terminal.

```sh
nmurgor@nmurgor:$ bgld-cli
Usage: bgld-cli [options] [command]

bgld-cli, - A cli utility for interacting with the Bitgesell Blockchain Network

Options:
  -V, --version             output the version number
  -h, --help                display help for command

Commands:
  address <--network>       Generate an an address (base58 encoded)
  wallet <--network>        Generate a Wallet
  transactions <--network>  encode at transaction [WIP]
  help [command]            display help for command
```

## Address

Currently supports interaction with mainnet. Tesnet will be added in future releases.

All addresses(Public/Private key pairs) are exported to the home folder in JSON format:

To generate an address:

```sh
nmurgor@nmurgor:$ bgld-cli address mainnet # address <network>
Genertated address for Mainnet(base58): bgl1q83vpa00xcv38swrquhggvvwafxsdwklsffa80m
Private Key(hex): 6c67b1f1b9f3c587fd6c257e2e1fdf2f67922de04e3c57f441a4d49616a0766d
Saved to : /home/nmurgor/bgl1q83vpa00xcv38swrquhggvvwafxsdwklsffa80m.json
```

> Note: Always keep your keys safe. Anyone with access to private keys can drain your Wallet.

## Wallet

Currently supports interaction with mainnet. Tesnet will be added in future releases.

All Wallets(Public/Private key pairs) are exported to the home folder in JSON format:

To generate a wallet:

```sh
nmurgor@nmurgor:$ bgld-cli address mainnet # address <network>
Genertated address for Mainnet(base58): bgl1q83vpa00xcv38swrquhggvvwafxsdwklsffa80m
Private Key(hex): 6c67b1f1b9f3c587fd6c257e2e1fdf2f67922de04e3c57f441a4d49616a0766d
Saved to : /home/nmurgor/bgl1q83vpa00xcv38swrquhggvvwafxsdwklsffa80m.json
```

> Note: Always keep your keys safe. Anyone with access to private keys can drain your Wallet.

```sh
nmurgor@nmurgor$ bgld-cli wallet mainnet
Successfully generated wallet for mainnet: 

Wallet PrivateKey: zprvAdZDy3B88MeASBzRxuhba6VJJYAjuafpDcxJT8pubKQ9dZsGv736BmtxGN9cBTbfHmaokvKUG7KEorSkhHDXgdg5jC1HrCg98VFestGJMbE

Wallet seed phrase: electric deer creek blood corn gasp lonely travel speak below clutch outside scout deliver detail weapon accident donor upon business adult together donor shiver
Saved to : /home/nmurgor/wallet.json
nmurgor@nmurgor:/media/nmurgor/3C51BA0C2E13BF5E/bounties/blgd-ts$ 

```

## Contributing

All contributions are highly welcome.

## License

`MIT`
