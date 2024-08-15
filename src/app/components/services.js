import Image from 'next/image'
import Link from "next/link"


export default function Services() {
    return (    
        <div>
            <div className="font-bold text-4xl text-center">Our Services</div>
            <div className="text-2xl text-purple-800 text-center pt-2">Propel Your Presence with Proven Expertise</div>
            <div className='grid md:grid-cols-2'>
                <div className="font-bold text-blue-900 text-2xl text-center py-2">Social Media Marketing</div>
                <div className="text-center py-2"> 
                    Craft a compelling story designed to enthral your audience. We understand the science and art behind viral campaigns. With our finger on the pulse of the latest trends, we create strategies that spark conversations and build communities.      
                </div> 
            </div>                         
            <div className='grid md:grid-cols-2'>
                <div className="font-bold text-blue-900 text-2xl text-center py-2">Digital Advertising</div>
                <div className="text-center py-2"> 
                    Stand out in a crowded digital space. Our targeted advertising approach ensures visibility to the right people, at the right time, with the right message. Say goodbye to ad spends that don't convert – we're all about maximising ROI.       
                </div> 
            </div>                         
            <div className='grid md:grid-cols-2'>
                <div className="font-bold text-blue-900 text-2xl text-center py-2">Engagement Growth</div>
                <div className="text-center py-2"> 
                    Customer interaction is the heartbeat of online presence. Our innovative techniques foster an environment that keeps your audience talking and engaging with your brand. We're in the business of building relationships, not just follower counts.                      
                </div> 
            </div>                         
        </div>
    )
}