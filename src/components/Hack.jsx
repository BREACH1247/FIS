import React from 'react'
import data from "../assets/data.png"
import fintech from "../assets/fintech.png"
import digital from "../assets/digital.png"
const Hack = () => {
  return (
    <div class="overflow-y-hidden">
        <div class="max-h-[100vh] max-w-[100vw]">
        <div class="text-white text-3xl font-extrabold mt-[3rem] bg-gradient-to-r from-sky-600 via-green-500 to-green-400">THIS YEAR WE HACK FOR</div>
        </div>
        <div class="flex flex-row flex-wrap mt-[4rem] justify-around max-w-[100vw]">
                <div>
                    <div><img src={data} className="max-w-[100vw]" alt="data" /></div>
                    <div class="text-white text-2xl font-semibold gap-1 mt-4 max-w-[100vw]">Data innovation</div>
                    <div class="text-white text-sm mt-4 max-w-xs">The financial sector is incredibly data intensive, and the challenge has been finding ways to harness the data to drive business growth. If you're a start-up focused on disrupting the way fintech uses data, register now for the IN48 data innovation ideation session.</div>
                </div>
                <div>
                    <div><img src={fintech} alt="data" /></div>
                    <div class="text-white text-2xl font-semibold gap-1 mt-4">AI in fintech</div>
                    <div class="text-white text-sm max-w-xs mt-4">Financial companies rely on artificial intelligence to improve everything from monitoring and reporting to regulatory compliance and beyond. Leveraging big data, cloud computing, AI and predictive analytics, companies can automate compliance tasks, reduce fraud risks, enhance authentication and improve identity management. If you're a start-up looking to deliver innovative solutions in this world, this is the ideation session for you.</div>
                </div>
                <div>
                    <div><img src={digital} alt="data" /></div>
                    <div class="text-white text-2xl font-semibold gap-1 mt-4">Digital assets</div>
                    <div class="text-white text-sm max-w-xs mt-4">As we explore more digital environments with fewer limitations and boundaries, we are entering a new world of blockchain-powered cryptocurrencies, NFTs and more. These innovations are an increasingly vital aspect of the virtual economy at the heart of the metaverse. If you're a start-up dedicated to building a disruptive web3 solution, you don't want to miss this ideation session.</div>
                      
                </div>
        </div>
    </div>
  )
}

export default Hack