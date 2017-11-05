Web3 = require('web3');
web3 = new Web3();

function doConnect(){

  // Get the provider URL
  var provider = "http://localhost:8545";
  // Connect with the provider - this is an synch call
  web3 = new Web3(new Web3.providers.HttpProvider(provider));
  var buyerprovider = "http://localhost:8546";
  buyerweb3 = new Web3(new Web3.providers.HttpProvider(buyerprovider));
  // Check if web3 is connected
  // This call is synchronous - you will see a warning in console - ignore for time being
  if (web3 && web3.isConnected()) {
      console.log("web3 Connected!!!")
      return true;
  } else {
      console.log("web3 NOT Connected!!!")
  }
}

doConnect()

function createInstance() {
  var abi = [{"constant":true,"inputs":[{"name":"_houseId","type":"int256"}],"name":"getProposal","outputs":[{"name":"_buyerName","type":"string"},{"name":"_price","type":"uint256"},{"name":"_lifetime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_houseId","type":"int256"},{"name":"_buyerName","type":"string"},{"name":"_price","type":"uint256"},{"name":"_lifetime","type":"uint256"}],"name":"addProposal","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_houseId","type":"int256"},{"name":"time","type":"uint256"}],"name":"extendLifeTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_houseId","type":"int256"}],"name":"sellHouse","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_houseId","type":"int256"},{"name":"_email","type":"string"},{"name":"_basePrice","type":"uint256"},{"name":"_location","type":"string"},{"name":"_ownerName","type":"string"},{"name":"_imageUrl","type":"string"},{"name":"_bedRooms","type":"uint256"},{"name":"_squareFeet","type":"uint256"}],"name":"setHouseDetails","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getDeposit","outputs":[{"name":"_deposit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"houseId","type":"int256"}],"name":"getHouseDetails","outputs":[{"name":"_owner","type":"string"},{"name":"_value","type":"uint256"},{"name":"_location","type":"string"},{"name":"_email","type":"string"},{"name":"_status","type":"string"},{"name":"_imageUrl","type":"string"},{"name":"_bedRooms","type":"uint256"},{"name":"_squareFeet","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_deposit","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"blockNo","type":"uint256"},{"indexed":false,"name":"house","type":"int256"},{"indexed":false,"name":"ownerName","type":"string"},{"indexed":false,"name":"ownerEmail","type":"string"},{"indexed":false,"name":"basePrice","type":"uint256"},{"indexed":false,"name":"location","type":"string"},{"indexed":false,"name":"bedRooms","type":"uint256"},{"indexed":false,"name":"squareFeet","type":"uint256"}],"name":"NewHouse","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"blockNo","type":"uint256"},{"indexed":false,"name":"house","type":"int256"},{"indexed":false,"name":"buyerName","type":"string"},{"indexed":false,"name":"price","type":"uint256"},{"indexed":false,"name":"lifetime","type":"uint256"}],"name":"NewProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"blockNo","type":"uint256"},{"indexed":false,"name":"house","type":"int256"},{"indexed":false,"name":"oldOwner","type":"string"},{"indexed":false,"name":"newOwner","type":"string"},{"indexed":false,"name":"price","type":"uint256"}],"name":"SoldHouse","type":"event"}]
  var address = "0x8dc0c8b841b48a5f4e9861e8f2337835b21ea503";
  var contractInstance = web3.eth.contract(abi).at(address);
  return contractInstance;
}

function createInstanceBuyer() {

  var abi = [{"constant":true,"inputs":[{"name":"_houseId","type":"int256"}],"name":"getProposal","outputs":[{"name":"_buyerName","type":"string"},{"name":"_price","type":"uint256"},{"name":"_lifetime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_houseId","type":"int256"},{"name":"_buyerName","type":"string"},{"name":"_price","type":"uint256"},{"name":"_lifetime","type":"uint256"}],"name":"addProposal","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_houseId","type":"int256"},{"name":"time","type":"uint256"}],"name":"extendLifeTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_houseId","type":"int256"}],"name":"sellHouse","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_houseId","type":"int256"},{"name":"_email","type":"string"},{"name":"_basePrice","type":"uint256"},{"name":"_location","type":"string"},{"name":"_ownerName","type":"string"},{"name":"_imageUrl","type":"string"},{"name":"_bedRooms","type":"uint256"},{"name":"_squareFeet","type":"uint256"}],"name":"setHouseDetails","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getDeposit","outputs":[{"name":"_deposit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"houseId","type":"int256"}],"name":"getHouseDetails","outputs":[{"name":"_owner","type":"string"},{"name":"_value","type":"uint256"},{"name":"_location","type":"string"},{"name":"_email","type":"string"},{"name":"_status","type":"string"},{"name":"_imageUrl","type":"string"},{"name":"_bedRooms","type":"uint256"},{"name":"_squareFeet","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_deposit","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"blockNo","type":"uint256"},{"indexed":false,"name":"house","type":"int256"},{"indexed":false,"name":"ownerName","type":"string"},{"indexed":false,"name":"ownerEmail","type":"string"},{"indexed":false,"name":"basePrice","type":"uint256"},{"indexed":false,"name":"location","type":"string"},{"indexed":false,"name":"bedRooms","type":"uint256"},{"indexed":false,"name":"squareFeet","type":"uint256"}],"name":"NewHouse","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"blockNo","type":"uint256"},{"indexed":false,"name":"house","type":"int256"},{"indexed":false,"name":"buyerName","type":"string"},{"indexed":false,"name":"price","type":"uint256"},{"indexed":false,"name":"lifetime","type":"uint256"}],"name":"NewProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"blockNo","type":"uint256"},{"indexed":false,"name":"house","type":"int256"},{"indexed":false,"name":"oldOwner","type":"string"},{"indexed":false,"name":"newOwner","type":"string"},{"indexed":false,"name":"price","type":"uint256"}],"name":"SoldHouse","type":"event"}]
  var address = "0x8dc0c8b841b48a5f4e9861e8f2337835b21ea503";
  var contractInstance = buyerweb3.eth.contract(abi).at(address);
  return contractInstance;
}

function startFilter() {
  console.log("Filter Started");
    var options =  {
        "fromBlock": "latest"
    };

    var filter = web3.eth.filter(options);
    filter.watch(function(error,result){
        if(error){
            console.log("Filter Error : ", error);
        } else {
            console.log("Event", result);
            //PUSH DATA TO EVENT ARRAY
        }
    });
}

function customerFilter() {
  console.log("Filter Started");
  var options =  {
      "fromBlock": 0
  };
  var notificationInstance = createInstance()
  var events = notificationInstance.allEvents(options);
  // watch for changes
  events.watch(function(error, result){
    if (!error){
      if(result.event === "NewHouse") {
        result.args.basePrice = result.args.basePrice.toNumber();
        result.args.bedRooms = result.args.bedRooms.toNumber();
        result.args.blockNo = result.args.blockNo.toNumber();
        result.args.house = result.args.house.toNumber();
        result.args.squareFeet = result.args.squareFeet.toNumber();
        console.log("Block No.",result.args.blockNo)

        console.log("Base Price ",result.args.basePrice)
        console.log("Bed Rooms ",result.args.bedRooms)
        console.log("House ",result.args.house)
        console.log("Square Feet ",result.args.squareFeet)
        console.log("Location ",result.args.location)
        console.log("ownerEmail ",result.args.ownerEmail)
        console.log("ownerName ",result.args.ownerName)
        console.log("-----------------------------------------")
        //console.dir(result);
      } else if(result.event === "NewProposal") {
        console.log("NewProposal:");
        result.args.blockNo = result.args.blockNo.toNumber();
        result.args.house = result.args.house.toNumber();
        result.args.lifetime = result.args.lifetime.toNumber();
        result.args.price = result.args.price.toNumber();
        console.log("Block No ", result.args.blockNo);
        console.log("House ", result.args.house);
        console.log("Life Time ", result.args.lifetime);
        console.log("Price ", result.args.price);
        console.log("Buyer Name ", result.args.buyerName)
        console.log("-----------------------------------------")
        //console.dir(result);
      } else if(result.event === "SoldHouse") {
        console.log("SoldHouse: ");
        result.args.blockNo = result.args.blockNo.toNumber();
        result.args.house = result.args.house.toNumber();
        console.log("Block No ", result.args.blockNo);
        console.log("House ", result.args.house);
        console.log("Owner ", result.args.oldOwner);
        console.log("-----------------------------------------")
        //console.dir(result);
      }
    }

  });
}
customerFilter()
//contractInstance.setHouseDetails(1, "veera@buffalo.edu", 100, "buffalo", "ss", "www.asdas.com",3, 4000,{from:eth.coinbase, gas: '4700000', value: "11"})
//contractInstance.getHouseDetails(1)

//contractInstance.addProposal(1, "Sam", 101, 1, {from:eth.coinbase, gas: '4700000', value: "101"})


//contractInstance.getProposal(1)
//contractInstance.sellHouse(1, {from:eth.coinbase, gas: '4700000'})
function setHouseDetails(_houseId, _email, _basePrice, _location, _ownerName, _imageUrl, _bedRooms, _squareFeet) {
  var contractInstance = createInstance();
  var estimatedGas = 4700000;
  var money = 11;
  var    txnObject = {
      from: web3.eth.coinbase,
      gas: estimatedGas,
      value: money
  }
  contractInstance.setHouseDetails(_houseId, _email, _basePrice, _location, _ownerName, _imageUrl, _bedRooms, _squareFeet,txnObject,function(error,result){
      if(error){
          console.log("ERR:",error);
      } else {
          console.log("TX Hash:",result);
      }
  });
}

function getHouseDetails(_houseId) {
  var contractInstance = createInstance();
  house = contractInstance.getHouseDetails(_houseId);
  house[1] = house[1].toNumber();
  house[6] = house[6].toNumber();
  house[7] = house[7].toNumber();
  return house
}

function getProposalDetails(_houseId) {
  var contractInstance = createInstanceBuyer();
  proposal = contractInstance.getProposal(_houseId);
  proposal[1] = proposal[1].toNumber();
  proposal[2] = proposal[2].toNumber();
  return proposal
}

function addProposal(_houseId, _buyerName, _price, _lifetime) {
  var contractInstance = createInstanceBuyer();
  var estimatedGas = 4700000;
  var money = 100001

  var    txnObject = {
      from: buyerweb3.eth.coinbase,
      gas: estimatedGas,
      value: money
  }
  contractInstance.addProposal(_houseId, _buyerName, _price, _lifetime,txnObject,function(error,result){
      if(error){
          console.log("ERR:",error);
      } else {
          console.log("TX Hash:",result);
      }
  });
}

function sellHouse(houseId) {
  var contractInstance = createInstance();
  var estimatedGas = 4700000;

  var    txnObject = {
      from: web3.eth.coinbase,
      gas: estimatedGas
  }

  contractInstance.sellHouse(houseId, txnObject,function(error,result){
      if(error){
          console.log("ERR:",error);
      } else {
          console.log("TX Hash:",result);
      }
  });

}
