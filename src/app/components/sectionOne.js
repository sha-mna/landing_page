import Image from 'next/image'
import Link from "next/link"

export default function SectionOne() {
    return (
        <section className="py-16">
            <div className="container mx-auto md:px-20">
                <h1 className=" font-bold text-blue-400 text-4xl pb-12 text-center">Welcome to Nova!</h1>
            </div>
           
           { Slide()}
            
        </section>
    )
}

function Slide() {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl">
                <Link href="/" legacyBehavior><a><Image src={"/images/imgOne.webp"} width={800} height={800} className="rounded-3xl px-4" /></a></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className='cat'>
                    <Link href='/' legacyBehavior>
                        <a className='text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600'>
                            Connecting Your Brand to the World, One Click at a Time.
                        </a>
                    </Link>                   
                </div>
                <p className='text-xl text-gray-500 py-4'>
                    We're not just a social media marketing agency—we're your ticket to digital excellence and engagement growth. With a canvas as vast as the internet, your business has limitless potential to connect with its audience. And we're here to paint that picture of success.
                </p>  
                <div className='flex gap-8 py-8'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Get in touch
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Book a call
                    </button>
                </div>           
            </div>
        </div>
    )
}

