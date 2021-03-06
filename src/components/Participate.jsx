import React from 'react'
import participate from '../assets/participate.png'
const Participate = () => {
  return (
    <div class="overflow-y-hidden">
        <div class="h-[5rem] w-[30rem]">
        <div class="text-white text-3xl font-extrabold mt-[3rem] pl-[5rem] px-4 py-4 bg-gradient-to-r from-sky-600 via-green-500 to-green-400">WHO CAN PARTICIPATE?</div>
        </div>
        <div class="flex flex-row flex-wrap mt-[4rem] justify-between ml-[5rem] mr-[5rem]">
            <div className="">
                <div className="text-white text-md max-w-lg mt-[2rem]">
                Startups with a technology stack that can solve horizontal problems - Customer onboarding, churn detection, customer loyalty, data marketplaces, DeFi stacks.
                </div>
                <div className="text-white text-md max-w-lg mt-[2rem]">
                FinTech Startups with innovative business models that can augment FIS offering and want broader reach. 
                </div>
                <div className="text-white text-md max-w-lg mt-[2rem]">
                Startups aspiring to build products and platforms leveraging FIS API’s.
                </div>
                <div className="text-white text-md max-w-lg mt-[2rem]">
                Group of startups collaborating and providing new capabilities. Example : Satellite imaging, Drone startups and radar startup collaborate and provide alternate data for commodities markets. 
                </div>
                <div className="text-white text-md max-w-lg mt-[2rem]">
                Startups having innovating automation and integration platforms. 
                </div>
            </div>
                <div>
                    <div><img src={participate} alt="participate" /></div>
                </div>
        </div>
    </div>
  )
}

export default Participate