import React from 'react';
import "../Components/hr.css";
import image2 from "../../public/Images/Who_We_Are_Image_1.jpg";
import image3 from "../../public/Images/Who_We_Are_Image_2.jpg";
import about1 from "../../public/Images/about11.jpg";
import about2 from "../../public/Images/about12.jpg";
import Image from 'next/image';

const About = () => {
    return (
        <>
            <style>{`
                body {
                    background-color: white;
                }
            `}</style>
            <div className='bg-white'>

                <div className='bg-white mt-5 container p-3'>
                    <div className="flex">
                        <div className="text-5xl font-extrabold tracking-wider bgVideoText">
                            <h1 className="heading text-black font-bold">About Us</h1>
                        </div>
                    </div>
                    <div className="hr-about"></div>
                </div>
                <div className="container mt-4">
                    {/* first */}
                    <div className="row">
                        <div className="col-lg-6 mb-2">
                            <h1 style={{ color: "#006429" }} className="text-lg font-bold text-green-800 tracking-widest mt-4">COMPANY PROFILE</h1>
                            <h3 className="text-4xl font-bold text-black">WHO WE ARE</h3><br />
                            <p className="text-[16px] text-justify">shandong changlu tools co., ltd. is an industrial and trade enterprise which integrates hardware tools, automobile maintenance tools, machine repair tools and household tools development, production and sales. it is located in linyi, shandong province, the capital of logistics in china. <br/><br /> The company covers an area of 50,000 square meters, with a production and storage area of 25,000 square meters. it mainly deals in 16 categories and more than 5,000 specifications such as changlu brand sets of tools, sleeves, sleeve accessories, wrenches, screwdrivers, fastening, shearing, clamps, knocking, etc. it is widely used in machinery, petroleum, chemical, electric power, automobile manufacturing and maintenance, etc. industry. <br /><br /> The company is currently the director of china wujiaochua business association, the executive director of the national federation of industry and commerce hardware and electrical chamber of commerce and the director unit of shandong hardware and electrical chamber of commerce.
                            </p>
                        </div>
                        <div className="col-lg-6 mt-2">
                            <Image src={image2}
                                className='object-cover img-fluid'
                                width={"100px"}
                                style={{ height: "550px" }}
                                alt='about'
                            />
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    {/* first */}
                    <div className="row">
                        <div className="col-lg-6 mb-2">

                            <h3 className="text-4xl font-bold text-black mt-4">OUR FACTORY</h3><br />
                            <p className="text-[16px] text-justify">Nestled near major transportation arteries for seamless logistics, our expansive 6,000-square-meter facility hums with innovation. This isn&apos;t just a production plant; it&apos;s a hub for research, development, and the creation of cutting-edge tools for the automotive industry. From specialized auto protection solutions to comprehensive car tool sets, our diverse range caters to a global audience. Our unwavering commitment to quality and exceeding customer expectations has cemented our reputation as a trusted partner worldwide. We are more than just a manufacturer; we are a team dedicated to pushing the boundaries and providing exceptional tools that empower individuals around the world. <br /><br /> We pride ourselves on being more than just a manufacturer. We are a dedicated team of professionals who are passionate about empowering individuals and businesses around the world with exceptional tools. Our mission is to innovate, inspire, and deliver unparalleled solutions that drive success in the automotive sector. Whether it&apos;s enhancing vehicle safety through our advanced protection products or providing mechanics with the tools they need to excel, we are committed to making a tangible difference in the industry.
                            </p>
                        </div>
                        <div className="col-lg-6 mt-2">
                            <Image src={image3}
                                className='object-cover img-fluid'
                                width={"100px"}
                                style={{ height: "550px" }}
                                alt='about'
                            />
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    {/* first */}
                    <div className="row">
                        <div className="col-lg-6 mb-2">

                            <h3 className="text-4xl font-bold text-black mt-3">OUR VISION</h3><br />
                            <p className="text-[16px] text-justify">At Changlu Tools, we dream of a boundless future where creativity flourishes without constraints. In our vision, power tools and hand tools seamlessly merge with the user&apos;s will, effortlessly translating ideas into tangible realities with unparalleled precision and efficiency. We firmly believe that when tools are both intuitive and accessible, they have the power to democratize the act of creation, making it accessible to all. <br /><br /> Our mission is to create a world where seasoned professionals and aspiring enthusiasts alike have access to the tools they need to bring their boldest visions to life. Through relentless innovation and unwavering dedication, Changlu Tools is committed to expanding the frontiers of possibility and unlocking the full potential of human ingenuity. Join us as we embark on a journey to transform dreams into reality, one tool at a time. <br /><br /> At Changlu Tools, innovation is at the heart of everything we do. Our research and development teams are constantly exploring new technologies and materials to create tools that are not only more efficient but also more ergonomic and user-friendly. We believe that the best tools are those that feel like a natural extension of the user&apos;s own hands, empowering them to work with greater speed, precision, and confidence.
                            </p>
                        </div>
                        <div className="col-lg-6 mt-2">
                            <Image src={about1}
                                className='object-cover img-fluid'
                                width={"100px"}
                                style={{ height: "550px" }}
                                alt='about'
                            />
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    {/* first */}
                    <div className="row">
                        <div className="col-lg-6 mb-2">

                            <h3 className="text-4xl font-bold text-black mt-4">OUR MISSION</h3><br />
                            <p className="text-[16px] text-justify">
                            At Changlu Tools, our mission is to be the trusted partner for creators of all levels, from seasoned professionals to passionate DIYers. We achieve this by providing a comprehensive range of industry-leading power tools and reliable hand tools. We believe that the right tools are essential for transforming ideas into reality, and we are dedicated to offering solutions that empower users to tackle any project with confidence. <br /><br /> Our commitment to innovation fuels the development of cutting-edge power tools that boast exceptional performance and durability. We invest heavily in research and development to ensure our power tools integrate the latest advancements in technology, delivering unmatched efficiency and functionality for even the most demanding tasks. <br /><br /> At Changlu Tools, we understand that every project, whether big or small, starts with a vision. Our mission is to provide the tools that make realizing that vision possible. Our extensive range includes everything from precision hand tools for intricate work to powerful, high-torque tools for heavy-duty applications. Each product is crafted with the highest quality materials and subjected to rigorous testing to meet our exacting standards.
                            </p>
                        </div>
                        <div className="col-lg-6 mt-2">
                            <Image src={about2}
                                className='object-cover img-fluid'
                                width={"100px"}
                                style={{ height: "550px" }}
                                alt='about'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
