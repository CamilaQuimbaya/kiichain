// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract PrivateInfoStorage {
    address[] private whiteList ;
    address private owner;
    string private kiichain;



    modifier onlyOwner(){
        require(msg.sender == owner, "not owner");
        _;
    }

    function isAddressInArray(address _address) private view returns (bool) {
        for (uint i = 0; i < whiteList.length; i++) {
            if (whiteList[i] == _address) {
                return true;
            }
        }
        return false;
    }
    modifier inWhiteList(){
        require(isAddressInArray(msg.sender) || msg.sender == owner, "Not in whiteList");
        _;
    }

    constructor(address _owner, address _firstAddress,string memory _kiichain){
        whiteList.push(_firstAddress);
        owner = _owner;
        kiichain = _kiichain;
    }

    function getWhiteList() public onlyOwner view returns(address[] memory){
        return whiteList;
    }

    function getKiiChain() public inWhiteList view  returns(string memory) {
        return kiichain;
    }

    function addAddressToWhiteList(address _address) public onlyOwner {
        whiteList.push(_address);
    }

    function whoImI() public view returns(string memory) {
       if(msg.sender == owner){
            return "owner";
       }else if(isAddressInArray(msg.sender)){
            return "inWhiteList";
       }else{
        return "unknown";
       }
    }

    function updateKiiChain(string memory _kiichain) public onlyOwner {
        kiichain = _kiichain;
    }
    

    
}