async function fetchCrypto(){

  
      try{
        const Ethdisplay = document.getElementById("priceEth");
        const Btcdisplay = document.getElementById("priceBit");
  const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd");
        if(!response.ok){
          throw new Error("The Resource cant be fetched");
        }
        else{
          const data = await response.json();
          console.log(data);
          Ethdisplay.textContent = data.ethereum.usd;
          Btcdisplay.textContent = data.bitcoin.usd;
        }


      }

      catch{



      }



}

fetchCrypto();

setInterval(fetchCrypto,10000);

