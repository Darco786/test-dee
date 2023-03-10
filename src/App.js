import 'bootstrap/dist/css/bootstrap.min.css';
import Academy from 'Pages/Academy';
import HowBuy from 'Pages/HowBuy';
import JobPortal from 'Pages/JobPortal';
import NftMarket from 'Pages/NftMarket';
import Privacy from 'Pages/Privacy';
import Reward from 'Pages/Reward';
import Risk from 'Pages/Risk';
import TeamPage from 'Pages/TeamPage';
import Terms from 'Pages/Terms';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import { ethers } from 'ethers';
import { useState } from 'react';
import Web3Modal from 'web3modal';
import { BEP20ABI, BigNFTABI } from './Constants/ABI';
import { ContractAddr, providerOptions, RPCUrl } from './Constants/Constants';
import UserContext from './UserContext';


const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
});


function App() {
  const defaultProvider = new ethers.providers.JsonRpcProvider(RPCUrl);
  const readContract = new ethers.Contract(ContractAddr.Main, BigNFTABI, defaultProvider);

  const [provider, setProvider] = useState(defaultProvider);
  const [account, setAccount] = useState();
  const [contracts, setContracts] = useState({
    Main: readContract
  });
  const [connectError, setConnectError] = useState("");

  const connectWallet = async () => {
    if (account) {
      return
    }

    try {
      let provider;
      try {
        provider = await web3Modal.connect();
      } catch (error) {
        return false;
      }
      provider = new ethers.providers.Web3Provider(provider);

      const contracts = {}
      for (const [token, address] of Object.entries(ContractAddr)) {
        contracts[token] = new ethers.Contract(address, token == "Main" ? BigNFTABI : BEP20ABI, provider.getSigner())
      }
      setContracts(contracts);
      setProvider(provider);

      const accounts = await provider.listAccounts();
      if (accounts)
        setAccount(accounts[0]);
      return true;
    } catch (error) {
      if (error !== 'Modal closed by user') {
        setConnectError(error)
      }
      return false;
    }
  };

  const disconnectWallet = () => {
    web3Modal.clearCachedProvider();
    setAccount();
    setConnectError("");
  };
  return (
    < >
      <UserContext.Provider value={{ provider, account, contracts, connectError, connectWallet, disconnectWallet }}>
        <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/nft-market" element={<NftMarket/>}/>
          <Route exact path="/job-portal" element={<JobPortal/>}/>
          <Route exact path="/academy" element={<Academy/>}/>
          <Route exact path="/team" element={<TeamPage/>}/>
          <Route exact path="/privacy-policy" element={<Privacy/>}/>
          <Route exact path="/terms" element={<Terms/>}/>
          <Route exact path="/risk" element={<Risk/>}/>
          <Route exact path="/rewards" element={<Reward/>}/>
          <Route exact path="/how-to-buy" element={<HowBuy/>}/>
        
        </Routes>
    </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
