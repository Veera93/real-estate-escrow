pragma solidity ^0.4.4;

contract RealEstate {

  address owner;
  uint deposit;

  struct House {
    int id;
    address owner;
    string ownerName;
    string ownerEmail;
    uint basePrice;
    string imageUrl;
    string location;
    Proposal proposal; //open/progress/done
    uint deposit;
    string status;
    uint bedRooms;
    uint squareFeet;
  }

  struct Proposal {
    address buyer;
    string buyerName;
    uint price;
    uint lifetime;
  }

  function RealEstate(uint _deposit) public {
    owner = msg.sender;
    deposit = _deposit;
  }

  function getDeposit() constant returns(uint _deposit) {
    _deposit = deposit;
  }

  mapping(int => House) houses;


  modifier onlyBuyer(int id) {
          require(msg.sender == houses[id].proposal.buyer);
          _;
  }


  modifier onlySeller(int id) {
          require(msg.sender == houses[id].owner);
          _;
  }

  //Give the details of the house
  function getHouseDetails(int houseId) constant public returns (string _owner, uint _value, string _location, string _email, string _status, string _imageUrl, uint _bedRooms, uint _squareFeet) {
    _owner = houses[houseId].ownerName;
    _value = houses[houseId].basePrice;
    _location = houses[houseId].location;
    _email = houses[houseId].ownerEmail;
    _status = houses[houseId].status;
    _imageUrl = houses[houseId].imageUrl;
    _imageUrl = houses[houseId].imageUrl;
    _bedRooms = houses[houseId].bedRooms;
    _squareFeet = houses[houseId].squareFeet;
  }



  //When a seller is ready to sell his house he gives out his house information
  function setHouseDetails(int _houseId, string _email, uint _basePrice, string _location, string _ownerName, string _imageUrl, uint _bedRooms, uint _squareFeet)  public payable{
    if(msg.value < deposit)
      return;

    houses[_houseId].id = _houseId;
    houses[_houseId].owner = msg.sender;
    houses[_houseId].ownerEmail = _email;
    houses[_houseId].basePrice = _basePrice;
    houses[_houseId].location = _location;
    houses[_houseId].deposit = msg.value;
    houses[_houseId].ownerName = _ownerName;
    houses[_houseId].imageUrl = _imageUrl;
    houses[_houseId].status = "open";
    houses[_houseId].imageUrl = _imageUrl;
    houses[_houseId].bedRooms = _bedRooms;
    houses[_houseId].squareFeet = _squareFeet;
  }

  //When buyer is interested in an house he places a proposal for the house
  //Money is taken from the buyer and deposited in the smart contract
  function addProposal(int _houseId, string _buyerName, uint _price, uint _lifetime) public payable {
    if(msg.value < houses[_houseId].basePrice)
      return;

    if(keccak256(houses[_houseId].status) == keccak256("open")){
      houses[_houseId].proposal.buyer = msg.sender;
      houses[_houseId].proposal.price = _price;
      houses[_houseId].proposal.lifetime = _lifetime;
      houses[_houseId].proposal.buyerName = _buyerName;
      houses[_houseId].status ="progess";
    }
  }

  function getProposal(int _houseId) constant public returns(string _buyerName,uint _price, uint _lifetime){
    _price = houses[_houseId].proposal.price;
    _lifetime = houses[_houseId].proposal.lifetime;
    _buyerName = houses[_houseId].proposal.buyerName;
  }

  function extendLifeTime(int _houseId,uint time) onlyBuyer(_houseId)  public{
    //Can take some commission
    houses[_houseId].proposal.lifetime = houses[_houseId].proposal.lifetime + time;
  }

  //Seller confirming the buyer's proposal
  //Money is transfered from the smart contract to the seller
  function sellHouse(int _houseId) onlySeller(_houseId) payable  public{
    houses[_houseId].owner = houses[_houseId].proposal.buyer;
    houses[_houseId].ownerEmail = "";
    houses[_houseId].deposit = msg.value;
    houses[_houseId].ownerName = houses[_houseId].proposal.buyerName ;
    houses[_houseId].status = "sold";
    Proposal proposal;
    houses[_houseId].proposal = proposal;
    houses[_houseId].owner.transfer(houses[_houseId].basePrice);
  }
}
