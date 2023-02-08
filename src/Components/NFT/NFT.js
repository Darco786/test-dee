import React from 'react'
import './Nft.css'
function NFT() {
  return (
    <>
    <section className='hero-nft'>
      <div className=''>
      <div className='container'>
        <div className='row justify-content-center'>
              <div className='col-md-6 '>
                <h1>
                  Explore, Collect,<br/> And Sell <div className='green'>NFTs</div>
                </h1>
                <h6>
                Welcome to the future, you can buy and sell awesome artworks form here. The world largest digital marketplace for non-fungible tokens.
                </h6>
                <div className='nft-hero-btn'>
                  <a href="/" className='nft-hero-btn-1'>Coming Soon..</a>
                  {/* <a href="/" className='nft-hero-btn-2'>Coming Soon..</a> */}
                </div>
              </div>
              <div className='col-md-6 text-end align-items-center'>
                <img className='hero-img' src='https://ik.imagekit.io/cforcrypto/Dework/nft_market/Asset_35.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670070227415' alt=""/>
              </div>            
        </div>    
      </div>
      </div>
    </section>
    </>
  )
}

export default NFT