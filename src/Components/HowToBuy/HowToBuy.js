import React from 'react'

function HowToBuy() {
  return (
    <section className="cta">
    <div className="container">
      <div className="text-center cta-head-1">
        <h2 className=" head-cta">How do you <span className='green'>Claim</span>
        
        ?</h2>

       <img src="https://ik.imagekit.io/cforcrypto/Dework/icons/Group_427325103.png" alt="" height='auto' width='auto'/>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <div className=" cta-new-box">
            <div className="cta-details">
              <p className="p-light ">Step-1</p>
              <h2 className="">Create <span className="green">MetaMask wallet</span> </h2>
              <p className="cta-p">
                Create a MetaMask Wallet using either a desktop computer or an
                iOS/Android mobile device. That will allow you to buy, sell,
                send, and receive $Dlance .
              </p>
              <p className="cta-p">
                To start with, ensure you have a MetaMask wallet installed on
                your browser in order to connect your wallet to the platform.
              </p>
              <p className="cta-p">
                If you are purchasing on mobile, we recommend using Trust
                Wallet and connecting through the in built browser (just copy
                presale link into the Trust Wallet Browser).
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className=" cta-new-box">
            <div className="cta-details">
              <p className="p-light ">Step-2</p>
              <h2 className="">Send <span className="green">ETH</span>  to your <span className="green">Wallet</span> </h2>
              <p className="cta-p">
                You can buy Ethereum (ETH) directly on MetaMask or transfer it
                to your MetaMask Wallet from exchanges like Coinbase, Binance,
                etc. Make sure to use the ERC-20 network when transferring
                ETH.
              </p>
              <p className="cta-p">
                Once you???ve connected your wallet, you???ll be able to purchase
                with ETH{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-1"></div>
      </div>

      <div className="second">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className=" cta-new-box-2">
              <div className="cta-details">
                <p className="p-light ">Step-3</p>
                <h2 className="">Add $Dlance into Metamask Wallet</h2>
                <p className="cta-p">
                  Access your $Dlance token in your metamask click on the
                  custom token and paste the contract address and you will get
                  $Dlance in your Metamask wallet.
                </p>
              </div>
            </div>
          </div>
        
        <div className="col-md-5">
          <div className=" cta-new-box-2">
            <div className="cta-details">
              <p className="p-light ">Step-4</p>
              <h2 className="">Swap ETH for $Dlance</h2>
              <p className="cta-p">
                You can start swapping as soon as you have ETH available!{" "}
              </p>
              <p className="cta-p">
                Type in the amount of $Dlance you wish to purchase and then
                click???Convert ETH???. Your wallet provider will ask you to
                confirm the transaction and will also show you the cost of gas
                fee .{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        </div>
      </div>
      {/* <div className='low-cta'>
      <div className=" cta-new-box-3">
            <div className="cta-details">
              <h2 className="">How to <span className="green">Claim</span> </h2>
              
              <p className="cta-p">
              Once the presale has ended, you???ll be able to head over to the claim button to claim your purchased Dlance token .{" "}
              </p>
           
            </div>
          </div></div> */}
     
    </div>
  </section>
  )
}

export default HowToBuy