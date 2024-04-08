// Select all html id
const bitcoinDisplay = document.getElementById("bitcoin");
const ethereumDisplay = document.getElementById("ethereum");
const dogecoinDisplay = document.getElementById("dogecoin");

// window onload
window.onload = function () {
  mainFun();
};

// mainFun function
function mainFun() {
  //   get api data
  const apiURL =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

  async function currencyFun() {
    const response = await fetch(apiURL);
    const data = await response.json();

    if (!response.ok) {
      alert("Network response was not ok");
    } else {
      bitcoinDisplay.innerHTML = "$" + data.bitcoin.usd;
      ethereumDisplay.innerHTML = "$" + data.ethereum.usd;
      dogecoinDisplay.innerHTML = "$" + data.dogecoin.usd;
    }
  }
  currencyFun();
}
