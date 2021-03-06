import React from 'react'
import RegisterButton from './RegisterButton'
import fbimg from "../assets/fb-icon.png"
import linkedinimg from '../assets/linkedin-icon.png'
import twitterimg from '../assets/twitter-icon.png'

function Footer() {
  return (
    <footer className='text-white sm:text-left text-center'>
    <div>
        <div className='grid sm:grid-cols-3 gap-4 pb-20 '>
            <div className="contactus mx-auto pl-4 pt-6">
                <div className='text-2xl font-bolder mb-4'>HAVE ANY QUESTIONS?</div>
                <div className='font-light text-sm py-6'>Send all your Questions to
                <div className='text-base font-normal'>IN48Partner@fisglobal.com</div></div>
                <div className='sm:text-left text-center'><RegisterButton /></div>
            </div>
            <div className="connected mx-auto pt-6">
                Stay Connected
                <div className="socialimgs flex">
                    <img src = {fbimg} width="32px" className='mx-auto'></img>
                    <img src = {linkedinimg} width="32px" className='mx-auto'></img>
                    <img src = {twitterimg} width="32px" className='mx-auto'></img>
                </div>
            </div>
                <div className='support mx-auto pt-6'>
                    <a href=""><div className='py-2 pt-0'>Customer Support  <span className='arrow'>˃</span></div></a>
                    <a href=""><div className='py-2'>Terms of Use  <span className='arrow'>˃</span></div></a>
                    <a href=""><div className='py-2'>Privacy Policy  <span className='arrow'>˃</span></div></a>
                </div>
        </div>
        <div className="copyright text-center font-light text-xs py-6">
            ©2022 FIS. Advancing the way the world pays, banks and invests™
        </div>
    </div>
    </footer>
  )
}

export default Footer