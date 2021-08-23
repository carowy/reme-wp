import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import img1 from '../images/ylemiste.jpg'
import img2 from '../images/paaste.jpg'
import img3 from '../images/maestro.jpg'
import {CloudinaryContext, Image} from 'cloudinary-react'

/* 
MIT License (Simple-react-lightbox)

Copyright (c) 2020 Michele Cocuccio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

function Projects() {
    return (
        <div>
            <div className="projects-s1">
                <h1 className="display-4">Tehtud tööd</h1>
            </div>
            <div className="projects-s2">
                <div id="featured-project">
                    <div id="featured-project-img">
                        <img src={img1} alt="project-1"></img>
                    </div>
                    <div id="featured-project-txt">
                        <div>
                            <h2>Lorem ipsum dolor</h2>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>

                <div id="featured-project" className="featured-project-2">
                    <div id="featured-project-img">
                        <img src={img2} alt="project-2"></img>
                    </div>
                    <div id="featured-project-txt">
                        <div>
                            <h2>Lorem ipsum dolor</h2>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>

                <div id="featured-project">
                    <div id="featured-project-img">
                        <img src={img3} alt="project-3"></img>
                    </div>
                    <div id="featured-project-txt">
                        <div>
                            <h2>Lorem ipsum dolor</h2>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-s3">
                <CloudinaryContext cloudName="dpk2jpxan">   
                    <SimpleReactLightbox>
                        <SRLWrapper className="gallery-wrapper">
                            {/* Kopeeri see kõige üles asendada PILDI LINK ja PILDI NIMI
                                <a href={`PILDI LINK`}>
                                <Image publicId="REME images/PILDI NIMI" id="image-thumbnail" />
                                </a>
                            */}
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1628594930/REME%20images/maestro_cnhpod.jpg`} id="gallery-image">
                                <Image publicId="REME images/maestro_cnhpod" id="image-thumbnail" alt="Maestro maja kuskil Tallinnas"/>
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1629377835/REME%20images/Baltijaamaturg_shmcau.jpg`}>
                                <Image publicId="REME images/Baltijaamaturg_shmcau" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1629377835/REME%20images/EestiMuusikajaTeatriakadeemia_zyvsu2.jpg`}>
                                <Image publicId="REME images/EestiMuusikajaTeatriakadeemia_zyvsu2" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1629377841/REME%20images/Kultuurikeskuskaja_g7hrrb.jpg`}>
                                <Image publicId="REME images/Kultuurikeskuskaja_g7hrrb" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1629377845/REME%20images/Zenitharimaja_dauctb.jpg`}>
                                <Image publicId="REME images/Zenitharimaja_dauctb" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1629377843/REME%20images/Sepapaja_1_gwkgyi.jpg`}>
                                <Image publicId="REME images/Sepapaja_1_gwkgyi" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1628597972/REME%20images/ylemiste_xvompf.jpg`}>
                                <Image publicId="REME images/ylemiste_xvompf" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1628597969/REME%20images/paaste_a8r5qo.jpg`}>
                                <Image publicId="REME images/paaste_a8r5qo" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1629377840/REME%20images/Keemia15_ifbzyc.jpg`}>
                                <Image publicId="REME images/Keemia15_ifbzyc" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1629377842/REME%20images/Solespordikeskus_lmm1ve.jpg`}>
                                <Image publicId="REME images/Solespordikeskus_lmm1ve" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1629377840/REME%20images/Kindlusekool_ohsci9.jpg`}>
                                <Image publicId="REME images/Kindlusekool_ohsci9" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1629377841/REME%20images/Tabasaluriigigumnaasium_obxz4s.jpg`}>
                                <Image publicId="REME images/Tabasaluriigigumnaasium_obxz4s" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1629377840/REME%20images/Kultuurikeskuskaja_o12zbv.jpg`}>
                                <Image publicId="REME images/Kultuurikeskuskaja_o12zbv" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1629377841/REME%20images/Parnulasteaed_vlfzxa.jpg`}>
                                <Image publicId="REME images/Parnulasteaed_vlfzxa" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1629377835/REME%20images/HKSCAN_bxb87h.jpg`}>
                                <Image publicId="REME images/HKSCAN_bxb87h" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1629377842/REME%20images/Saku_Spordihoone_vacsyf.jpg`}>
                                <Image publicId="REME images/Saku_Spordihoone_vacsyf" id="image-thumbnail" />
                            </a>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </CloudinaryContext>
            </div>


        </div>
    )
}
export default Projects;