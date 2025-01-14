// App.js
import React from 'react';
import '../App.css'

const Homepage1 = () => {
  return (
    <div className="App">
        <header className="header px-[100px]">
            <div className="header-content">
            <img src="/assets/company_logo.png" alt="logo" />
            <nav>
                <ul className='text-white font-bold'>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Services</li>
                <li>Contact</li>
                </ul>
            </nav>
            </div>
            <div className="welcome flex justify-between items-center">
                <div className='text-white w-[50%] flex flex-col items-start'>
                    <div className='w-[60%] text-white flex flex-col items-start'>
                        <h1 className='font-bold text-[20px]'>WELCOME</h1>
                        <h2 className='font-bold text-[32px] text-left'>Lorem ipsum dolor sit amet consectetur</h2>
                        <p className='text-left'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
                        </p>
                        <button className='bg-white text-black px-[40px] mt-[10px]'>Explore</button>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <img src="/assets/group_1.png" alt="group_1" />
                </div>
            </div>
        </header>

        <section className="partners flex flex-col items-center px-[120px]">
            <h2 className='text-[#74C69D] font-bold'>PARTNERS</h2>
            <p className='text-[40px] font-bold'>Lorem Ipsum Dolor</p>
            <p className='text-[20px] text-center w-[30%]'>Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.</p>
            <div className="logos flex items-center justify-between w-[100%] mt-[70px]">
                <img src="/assets/google_image.svg" alt="Google" />
                <img src="/assets/microsoft_image.svg" alt="Microsoft" />
                <img src="/assets/air_image.svg" alt="Airbnb" />
                <img src="/assets/facebook_image.svg" alt="Facebook" />
                <img src="/assets/spotify_image.svg" alt="Spotify" />
            </div>
            <button className='bg-black text-white text-[20px] px-[25px] py-[10px] mt-[45px]'>Learn More</button>
        </section>

        <section className="content px-[120px]">
            <div className="content-item flex justify-between items-center w-[100%]">
                <img src="/assets/group_2.png" alt="Team collaboration" className='w-[50%] p-[50px]' />
                <div className='w-[40%] text-left'>
                    <h3 className='text-[40px] font-bold'>Lorem ipsum dolor sit amet consectetur</h3>
                    <p className='text-[#21252980] mt-[25px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                    nemo hic quos.
                    </p>
                    <button className='bg-black text-white text-[20px] px-[25px] py-[10px] mt-[25px]'>Learn More</button>
                </div>
            </div>
            <div className="content-item flex justify-between items-center w-[100%]">
                <div className='w-[40%] text-left'>
                    <h3 className='text-[40px] font-bold'>Lorem ipsum dolor sit amet consectetur</h3>
                    <p className='text-[#21252980] mt-[25px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                    nemo hic quos.
                    </p>
                    <button className='bg-black text-white text-[20px] px-[25px] py-[10px] mt-[25px]'>Learn More</button>
                </div>
                <img src="/assets/group_3.svg" alt="Team collaboration" className='w-[50%] p-[50px]' />
            </div>
        </section>

        <section className="team flex flex-col items-center px-[120px]">
            <h2 className='text-[#74C69D] font-bold'>TEAM</h2>
            <p className='text-[40px] font-bold'>Our Talents</p>
            <p className='text-[20px] text-center w-[30%]'>Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.</p>
            <div className="team-cards flex justify-center space-x-16 items-center w-[100%] mt-[25px]">
                <div className="card shadow-2xl cursor-pointer">
                    <img src="/assets/team_1.png" alt="Peg Legge" />
                    <h3>Peg Legge</h3>
                    <p>CEO</p>
                </div>
                <div className="card shadow-2xl cursor-pointer">
                    <img src="/assets/team_2.png" alt="Richard Guerra" />
                    <h3>Richard Guerra</h3>
                    <p>CTO</p>
                </div>
                <div className="card shadow-2xl cursor-pointer">
                    <img src="/assets/team_3.svg" alt="Alexandra Stolz" />
                    <h3>Alexandra Stolz</h3>
                    <p>Designer</p>
                </div>
                <div className="card shadow-2xl cursor-pointer">
                    <img src="/assets/team_4.svg" alt="Janet Bray" />
                    <h3>Janet Bray</h3>
                    <p>Developer</p>
                </div>
            </div>
            <button className='bg-black text-white text-[20px] px-[25px] py-[10px] mt-[45px]'>View Team</button>
        </section>

        <footer className="footer flex justify-between items-center">
            <img src="/assets/links_nav.png" alt="socials" />
            <p>© Start, 2022. All rights reserved.</p>
        </footer>
    </div>
  );
};

export default Homepage1;
