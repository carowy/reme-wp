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
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1628594930/REME%20images/maestro_cnhpod.jpg`}>
                                <Image publicId="REME images/maestro_cnhpod" id="image-thumbnail" alt="Maestro maja kuskil Tallinnas"/>
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1628597969/REME%20images/paaste_a8r5qo.jpg`}>
                                <Image publicId="REME images/paaste_a8r5qo" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1628594930/REME%20images/maestro_cnhpod.jpg`}>
                                <Image publicId="REME images/maestro_cnhpod" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1628594930/REME%20images/maestro_cnhpod.jpg`}>
                                <Image publicId="REME images/maestro_cnhpod" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1628594930/REME%20images/maestro_cnhpod.jpg`}>
                                <Image publicId="REME images/maestro_cnhpod" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1628594930/REME%20images/maestro_cnhpod.jpg`}>
                                <Image publicId="REME images/maestro_cnhpod" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1628594930/REME%20images/maestro_cnhpod.jpg`}>
                                <Image publicId="REME images/maestro_cnhpod" id="image-thumbnail" />
                            </a>
                            <a href={`https://res.cloudinary.com/dpk2jpxan/image/upload/v1628597969/REME%20images/paaste_a8r5qo.jpg`}>
                                <Image publicId="REME images/paaste_a8r5qo" id="image-thumbnail" />
                            </a>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </CloudinaryContext>
            </div>


        </div>
    )
}
export default Projects;