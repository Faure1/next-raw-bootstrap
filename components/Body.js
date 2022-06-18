
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import {Button, Container, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const Bodys= () => {
    return(
        <main>
            <div >
                <div className='d-flex flex-wrap mt-4 justify-content-center'>
                    <div className='col-lg-3 col-12'>
                        <div className='d-flex justify-content-center'>
                            <Image  src='/assets/1.png'  width={300} height={450} layout='intrinsic'/>
                        </div>
                        <p className='text-center text-light'>TinkerBell y el tesoro perdido</p>
                    </div>
                    <div className='col-lg-3 col-12 justify-content-center'>
                        <div className='d-flex justify-content-center'>
                                <Image  src='/assets/2.png'  width={300} height={450} layout='intrinsic'/>
                        </div>
                        <p className='text-center text-light'>Los increibles 2</p>
                    </div>
                    <div className='col-lg-3 col-12'>
                        <div className='d-flex justify-content-center'>
                                <Image  src='/assets/3.png'  width={300} height={450} layout='intrinsic'/>
                        </div>
                        <p className='text-center text-light'>Shrek </p>
                    </div>
                    <div className='col-lg-3 col-12'>
                        <div className='d-flex justify-content-center'>
                                <Image  src='/assets/4.png'  width={300} height={450} layout='intrinsic'/>
                        </div>
                        <p className='text-center text-light'>UP</p>
                    </div>
                    <div className='col-lg-3 col-12'>
                        <div className='d-flex justify-content-center'>
                                <Image  src='/assets/5.png'  width={300} height={450} layout='intrinsic'/>
                        </div>
                        <p className='text-center text-light'>Alicia en el pais de las maravillas</p>
                    </div>
                    <div className='col-lg-3 col-12'>
                        <div className='d-flex justify-content-center'>
                                <Image  src='/assets/6.png'  width={300} height={450} layout='intrinsic'/>
                        </div>
                        <p className='text-center text-light'>Malefica</p>
                    </div>
                    <div className='col-lg-3 col-12'>
                        <div className='d-flex justify-content-center'>
                                <Image  src='/assets/7.png'  width={300} height={450} layout='intrinsic'/>
                        </div>
                        <p className='text-center text-light'>Moster inc</p>
                    </div>
                    <div className='col-lg-3 col-12'>
                        <div className='d-flex justify-content-center'>
                                <Image  src='/assets/8.png'  width={300} height={450} layout='intrinsic'/>
                        </div>
                        <p className='text-center text-light'>La Bella y la Bestia</p>
                    </div>
                    <div className='col-lg-3 col-12'>
                        <div className='d-flex justify-content-center'>
                                <Image  src='/assets/9.png'  width={300} height={450} layout='intrinsic'/>
                        </div>
                        <p className='text-center text-light'>Rio</p>
                    </div>
                    <div className='col-lg-3 col-12'>
                        <div className='d-flex justify-content-center'>
                                <Image  src='/assets/10.png'  width={300} height={450} layout='intrinsic'/>
                        </div>
                        <p className='text-center text-light'>stitch</p>
                    </div>
                    <div className='col-lg-3 col-12'>
                        <div className='d-flex justify-content-center'>
                                <Image  src='/assets/11.png'  width={300} height={450} layout='intrinsic'/>
                        </div>
                        <p className='text-center text-light'>Coco</p>
                    </div>
                    <div className='col-lg-3 col-12'>
                        <div className='d-flex justify-content-center'>
                                <Image  src='/assets/12.png'  width={300} height={450} layout='intrinsic'/>
                        </div>
                        <p className='text-center text-light'>Aladin</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Bodys;