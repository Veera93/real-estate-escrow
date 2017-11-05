Web3 = require('web3');
web3 = new Web3();

function doConnect(){

  // Get the provider URL
  var provider = "http://localhost:8545";
  // Connect with the provider - this is an synch call
  web3 = new Web3(new Web3.providers.HttpProvider(provider));

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
  var address = "0xbf40a43682659c089f2ee3bcb941884f50fd8343";
  var contractInstance = web3.eth.contract(abi).at(address);
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
        console.dir(result);
      } else if(result.event === "NewProposal") {
        console.log("NewProposal:");
        result.args.blockNo = result.args.blockNo.toNumber();
        result.args.house = result.args.house.toNumber();
        result.args.lifetime = result.args.lifetime.toNumber();
        result.args.price = result.args.price.toNumber();
        console.dir(result);
      } else if(result.event === "SoldHouse") {
        console.log("SoldHouse: ");
        result.args.blockNo = result.args.blockNo.toNumber();
        result.args.house = result.args.house.toNumber();
        console.dir(result);
      }
    }

  });
}
customerFilter()
contractInstance.setHouseDetails(1, "veera@buffalo.edu", 100, "buffalo", "ss", "www.asdas.com",3, 4000,{from:eth.coinbase, gas: '4700000', value: "11"})
contractInstance.getHouseDetails(1)

contractInstance.addProposal(1, "Sam", 101, 1, {from:eth.coinbase, gas: '4700000', value: "101"})


contractInstance.getProposal(1)
contractInstance.sellHouse(1, {from:eth.coinbase, gas: '4700000'})
function setHouseDetails() {

}

function getHouseDetails() {

}

function addProposal() {

}

function sellHouse() {
  
}
