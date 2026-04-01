import user from '../assets/user.png';
import pack from '../assets/package.png';
import rock from '../assets/rocket.png';
const GetStarted = () => {
    return (
        <div className=" py-30 mx-auto bg-base-200">
            <div>
                <div className='items-title'>
        <div className="hero ">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-4xl text-[#101727] font-bold">Get Started in 3 Steps</h1>
                    <p className="py-6 text-[#627382]">
Start using premium digital tools in minutes, not hours.</p>
                </div>
            </div>
        </div>
    </div>
            </div>
            <div className=" w-[80%] mx-auto gap-7.5 grid md:grip-cols-2 lg:grid-cols-3">
                <div className="card bg-white pb-10 card-lg shadow-sm">
                    <div className="card-body text-center rounded-2xl">
                        <div className="text-right pb-5"><p className="inline text-right rounded-full text-white py-2 px-2.5 text-sm back">01</p></div>
                        <div className="flex justify-center">
                        <div className='p-6 rounded-full bg-purple-200'><img src={user}/></div>
                        </div>
                        <h2 className="card-title justify-center">Create Account</h2>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className="card bg-white pb-10 card-lg shadow-sm">
                    <div className="card-body text-center rounded-2xl">
                        <div className="text-right pb-5"><p className="inline text-right rounded-full text-white py-2 px-2.5 text-sm back">02</p></div>
                        <div className="flex justify-center">
                        <div className='p-6 rounded-full bg-purple-200'><img src={pack}/></div>
                        </div>
                        <h2 className="card-title justify-center">Choose Products</h2>
                        <p>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
                <div className="card bg-white pb-10 card-lg shadow-sm">
                    <div className="card-body text-center rounded-2xl">
                        <div className="text-right pb-5"><p className="inline text-right rounded-full text-white py-2 px-2.5 text-sm back">03</p></div>
                        <div className="flex justify-center">
                        <div className='p-6 rounded-full bg-purple-200'><img src={rock}/></div>
                        </div>
                        <h2 className="card-title justify-center">Start Creating</h2>
                        <p>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;