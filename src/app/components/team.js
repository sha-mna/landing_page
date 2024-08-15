import Image from 'next/image'
import Link from "next/link"

export default function Team() {
    return (
        <div>
            <div className="font-bold text-4xl text-center">Our team</div>
            <div className="text-2xl text-purple-800 text-center pt-2">Meet the team behind our success</div>
            <div className="grid md:grid-cols-3">
                <div className="rounded-2xl">
                    <Link href="/" legacyBehavior><a><Image src={"/images/imgThree.webp"} width={500} height={500} className="rounded-3xl px-4" /></a></Link>
                    <div className='text-center'>
                        <div className='font-bold text-2xl'>Peter</div>
                        <div className='font-bold text-blue-500 text-1xl'>CEO</div>
                        <div>
                            James is the founder of Nova, and passionate about helping businesses grow through Social Media.
                        ‍</div>
                    </div>
                </div>
                <div className="rounded-2xl">
                    <Link href="/" legacyBehavior><a><Image src={"/images/imgFour.webp"} width={800} height={800} className="rounded-3xl px-4" /></a></Link>
                    <div className='text-center'>
                        <div className='font-bold text-2xl'>Claudia</div>
                        <div className='font-bold text-blue-500 text-1xl'>Digital Marketing Analyst</div>
                        <div>
                            Skilled in translating data into actionable insights for strategic online marketing campaigns.
                        ‍</div>
                    </div>
                </div>
                <div className="rounded-2xl">
                    <Link href="/" legacyBehavior><a><Image src={"/images/imgFour.webp"} width={800} height={800} className="rounded-3xl px-4" /></a></Link>
                    <div className='text-center'>
                        <div className='font-bold text-2xl'>Sarah</div>
                        <div className='font-bold text-blue-500 text-1xl'>Social Media Strategy Director</div>
                        <div>
                            Expert in crafting compelling brand stories on social media platforms for heightened engagement.
                        ‍</div>
                    </div>
                </div>
            </div>  
               
        </div>
    )
        
}