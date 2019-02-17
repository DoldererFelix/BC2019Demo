$(document).ready(function() {

      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (typeof web3 !== 'undefined') {
          // Use Mist/MetaMask's provider
          web3js = new Web3(web3.currentProvider);
      } else {
          document.getElementById("2").style.display = "initial";
          document.getElementById("1").style.display = "none";

      }
      if (typeof web3 === 'undefined') {
          alert("Bitte installiere einen Web3 Provider");
      }


    var contract_address = "0x47264Be43918572151865baDa4D205d4f7574C9C";
    var contract_abi = [
        {
                "constant": true,
                "inputs": [
                        {
                                "name": "",
                                "type": "address"
                        }
                ],
                "name": "frozenAccount",
                "outputs": [
                        {
                                "name": "",
                                "type": "bool"
                        }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
        },
        {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                        {
                                "name": "",
                                "type": "uint256"
                        }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
        },
        {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                        {
                                "name": "",
                                "type": "string"
                        }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
        },
        {
                "constant": true,
                "inputs": [
                        {
                                "name": "",
                                "type": "address"
                        }
                ],
                "name": "balanceOf",
                "outputs": [
                        {
                                "name": "",
                                "type": "uint256"
                        }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
        },
        {
                "constant": true,
                "inputs": [
                        {
                                "name": "",
                                "type": "address"
                        },
                        {
                                "name": "",
                                "type": "address"
                        }
                ],
                "name": "allowance",
                "outputs": [
                        {
                                "name": "",
                                "type": "uint256"
                        }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
        },
        {
                "constant": true,
                "inputs": [],
                "name": "buyPrice",
                "outputs": [
                        {
                                "name": "",
                                "type": "uint256"
                        }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
        },
        {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                        {
                                "name": "",
                                "type": "address"
                        }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
        },
        {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                        {
                                "name": "",
                                "type": "string"
                        }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
        },
        {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                        {
                                "name": "",
                                "type": "uint8"
                        }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
        },
        {
                "constant": true,
                "inputs": [],
                "name": "sellPrice",
                "outputs": [
                        {
                                "name": "",
                                "type": "uint256"
                        }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
        },
        {
                "constant": false,
                "inputs": [
                        {
                                "name": "_to",
                                "type": "address"
                        }
                ],
                "name": "distributeToken",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
        },
        {
                "inputs": [
                        {
                                "name": "initialSupply",
                                "type": "uint256"
                        },
                        {
                                "name": "tokenName",
                                "type": "string"
                        },
                        {
                                "name": "tokenSymbol",
                                "type": "string"
                        }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
        },
        {
                "constant": false,
                "inputs": [
                        {
                                "name": "newSellPrice",
                                "type": "uint256"
                        },
                        {
                                "name": "newBuyPrice",
                                "type": "uint256"
                        }
                ],
                "name": "setPrices",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
        },
        {
                "constant": false,
                "inputs": [
                        {
                                "name": "newOwner",
                                "type": "address"
                        }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
        },
        {
                "constant": false,
                "inputs": [
                        {
                                "name": "_spender",
                                "type": "address"
                        },
                        {
                                "name": "_value",
                                "type": "uint256"
                        },
                        {
                                "name": "_extraData",
                                "type": "bytes"
                        }
                ],
                "name": "approveAndCall",
                "outputs": [
                        {
                                "name": "success",
                                "type": "bool"
                        }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
        },
        {
                "constant": false,
                "inputs": [
                        {
                                "name": "target",
                                "type": "address"
                        },
                        {
                                "name": "freeze",
                                "type": "bool"
                        }
                ],
                "name": "freezeAccount",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
        },
        {
                "constant": false,
                "inputs": [
                        {
                                "name": "_spender",
                                "type": "address"
                        },
                        {
                                "name": "_value",
                                "type": "uint256"
                        }
                ],
                "name": "approve",
                "outputs": [
                        {
                                "name": "success",
                                "type": "bool"
                        }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
        },
        {
                "constant": false,
                "inputs": [
                        {
                                "name": "target",
                                "type": "address"
                        },
                        {
                                "name": "mintedAmount",
                                "type": "uint256"
                        }
                ],
                "name": "mintToken",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
        },
        {
                "constant": false,
                "inputs": [],
                "name": "buy",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
        },
        {
                "anonymous": false,
                "inputs": [
                        {
                                "indexed": true,
                                "name": "from",
                                "type": "address"
                        },
                        {
                                "indexed": false,
                                "name": "value",
                                "type": "uint256"
                        }
                ],
                "name": "Burn",
                "type": "event"
        },
        {
                "anonymous": false,
                "inputs": [
                        {
                                "indexed": false,
                                "name": "target",
                                "type": "address"
                        },
                        {
                                "indexed": false,
                                "name": "frozen",
                                "type": "bool"
                        }
                ],
                "name": "FrozenFunds",
                "type": "event"
        },
        {
                "anonymous": false,
                "inputs": [
                        {
                                "indexed": true,
                                "name": "from",
                                "type": "address"
                        },
                        {
                                "indexed": true,
                                "name": "to",
                                "type": "address"
                        },
                        {
                                "indexed": false,
                                "name": "value",
                                "type": "uint256"
                        }
                ],
                "name": "Transfer",
                "type": "event"
        },
        {
                "constant": false,
                "inputs": [
                        {
                                "name": "_to",
                                "type": "address"
                        },
                        {
                                "name": "_value",
                                "type": "uint256"
                        }
                ],
                "name": "transfer",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
        },
        {
                "constant": false,
                "inputs": [
                        {
                                "name": "_from",
                                "type": "address"
                        },
                        {
                                "name": "_value",
                                "type": "uint256"
                        }
                ],
                "name": "burnFrom",
                "outputs": [
                        {
                                "name": "success",
                                "type": "bool"
                        }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
        },
        {
                "constant": false,
                "inputs": [
                        {
                                "name": "amount",
                                "type": "uint256"
                        }
                ],
                "name": "sell",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
        },
        {
                "constant": false,
                "inputs": [
                        {
                                "name": "_from",
                                "type": "address"
                        },
                        {
                                "name": "_to",
                                "type": "address"
                        },
                        {
                                "name": "_value",
                                "type": "uint256"
                        }
                ],
                "name": "transferFrom",
                "outputs": [
                        {
                                "name": "success",
                                "type": "bool"
                        }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
        },
        {
                "constant": false,
                "inputs": [
                        {
                                "name": "_value",
                                "type": "uint256"
                        }
                ],
                "name": "burn",
                "outputs": [
                        {
                                "name": "success",
                                "type": "bool"
                        }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
        }
];
    var contract_instance = web3.eth.contract(contract_abi).at(contract_address);


      $('#fund_button').on('click',function fundContract() {
        var a = $('#fund_contract').val();
        console.log(a)
        console.log(web3.eth.accounts[0])
        console.log(contract_address)

        web3.eth.sendTransaction({
          from: web3.eth.accounts[0],
          to: contract_address,
          value: a
        }, function(err, res) {
          console.error(err);
          alert("Success")
        });
      });

      $('#sell_button').on('click',function fundContract() {
        var a = $('#sell_lot1').val();
        var b = $('#sell_lot2').val();
        contract_instance.distributeToken(web3.eth.accounts[0], function(err, res) {
          console.error(err)
          alet("Success")
        })
      });

      $('#buy_button').on('click',function fundContract() {
        var a = $('#buy_lot1').val();
        contract_instance.distributeToken(web3.eth.accounts[0], function(err, res) {
          console.error(err)
          alet("Success")
        })
      });

});
