import React, { useContext, useState } from 'react'
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "../../utils/VisibilitySensor";
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { IoMdChatbubbles } from 'react-icons/io'
import { FaRegNewspaper } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'
import { GrInstagram } from 'react-icons/gr'
import bgEco from '../../assets/bgEco.jpg'

import StyledEcosysteme from './StyledEcosysteme'
import Context from '../../utils/context';

export const Ecosysteme = () => {
    const [styles, setStyles] = useState(null)
    const [hover, setHover] = useState([{ opacity: 0 }, { opacity: 0 }, { opacity: 0 }])
    const { ecosysteme } = useContext(Context)
    const height = (window.innerHeight) + 100
    const width = (window.innerWidth) + 100

    const handleRotationMove = e => {
        const xVal = e.clientX
        const yVal = e.clientY
        const yRotation = -50 * ((xVal - width / 2) / width)
        const xRotation = 50 * ((yVal - height / 2) / height)
        setStyles({
            transform: `perspective(700px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
            transition: '0ms'
        })
    }

    const handleRotationDown = () => {
        setStyles({
            transform: `perspective(700px) scale(1.1) rotateX(${0}deg) rotateY(${0}deg)`,
            transition: '1000ms'
        })
    }

    const handleHover = (i) => {
        let cloneHover = [...hover]
        cloneHover[i] = { opacity: 1 }
        setHover(cloneHover)
    }
    const handleLeave = (i) => {
        let cloneHover = [...hover]
        cloneHover[i] = { opacity: 0 }
        setHover(cloneHover)
    }

    return (
        <StyledEcosysteme ref={ecosysteme} >
            <img className='bg' alt='background' src={bgEco} />
            <VisibilitySensor partialVisiblity offset={{ top: -100 }} once>
                {({ isVisible }) => (
                    <Spring
                        to={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible
                                ? "translateY(0)"
                                : "translateY(100px)",
                        }}>
                        {(props) => (
                            <div className='container-h1'>
                                <h1 style={{ ...props }}>NOTRE ECOSYSTÈME</h1>
                            </div>
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
            <div className='container-svg' onMouseMove={handleRotationMove} onMouseOut={handleRotationDown} style={styles} >
                <div className='container-icons'>
                    <a rel="noopener noreferrer" href='https://twitter.com/DevTrotter_Pro' target='_blank' ><AiOutlineTwitter className='icon twitter' /></a>
                    <a rel="noopener noreferrer" href='https://www.youtube.com/channel/UCHuGcYX0jsbCA0lzFj1DmbA' target='_blank' ><AiFillYoutube className='icon ytb' /></a>
                    <IoMdChatbubbles onMouseOver={() => handleHover(0)} onMouseOut={() => handleLeave(0)} className='icon bubble' />
                    <span style={hover[0]} className='forum-span'>Forum en cours de développement</span>
                    <a onMouseOver={() => handleHover(2)} onMouseOut={() => handleLeave(2)} rel="noopener noreferrer" href='https://www.devtrotter.com/' target='_blank' ><FaRegNewspaper className='icon blog' /></a>
                    <span style={hover[2]} className='blog-span'>Blog en cours de développement</span>
                    <MdSchool onMouseOver={() => handleHover(1)} onMouseOut={() => handleLeave(1)} className='icon formation' />
                    <span style={hover[1]} className='formation-span'>Formations en cours de développement</span>
                    <a rel="noopener noreferrer" href='https://www.instagram.com/dev.trotter/' target='_blank' ><GrInstagram className='icon insta' /></a>
                    <svg className='logo' width="22%" viewBox="0 0 74 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M55.5042 21.545L37 11.2835L55.5042 0V21.545Z" fill="#7EC4A4" />
                        <path d="M55.5042 43.0899L37 32.8284L55.5042 21.5449V43.0899Z" fill="#277E5E" />
                        <path d="M37 54.3653L18.5042 44.1038L37 32.8203V54.3653Z" fill="#09B5D6" />
                        <path d="M18.5042 65.6568L0 55.3953L18.5042 44.1118V65.6568Z" fill="#0D95B0" />
                        <path d="M55.5042 107.675L37 97.4217L55.5042 86.1299V107.675Z" fill="#753E90" />
                        <path d="M74 96.3912L55.5042 86.1297L74 74.8462V96.3912Z" fill="#484999" />
                        <path d="M37 119L18.5042 108.739L37 97.4468V119Z" fill="#492778" />
                        <path d="M18.5042 108.755L0 98.4939L18.5042 87.2104V108.755Z" fill="#3E3680" />
                        <path d="M18.5042 87.2101L0 76.9486L18.5042 65.6567V87.2101Z" fill="#56519E" />
                        <path d="M37 11.2749L55.5042 21.5364L37 32.8199V11.2749Z" fill="#48B48C" />
                        <path d="M37 32.8203L55.5042 43.0818L37 54.3653V32.8203Z" fill="#3EBEE4" />
                        <path d="M18.5042 44.1118L37 54.3733L18.5042 65.6568V44.1118Z" fill="#52C2EA" />
                        <path d="M0 76.9487L18.5042 87.2102L0 98.4937V76.9487Z" fill="#5E5CA6" />
                        <path d="M37 97.4468L55.5042 107.717L37 119V97.4468Z" fill="#875BA2" />
                        <path d="M18.5042 87.2104L37 97.472L18.5042 108.755V87.2104Z" fill="#6E56A0" />
                        <path d="M55.5042 86.1299L74 96.3914L55.5042 107.675V86.1299Z" fill="#6F6FB2" />
                        <path d="M55.5042 64.5845L74 74.846L55.5042 86.1294V64.5845Z" fill="#6E92C7" />
                        <path d="M0 55.4038L18.5042 65.6653L0 76.9488V55.4038Z" fill="#6F81BF" />
                    </svg>

                    <svg id='svg' width="808" height="510" viewBox="0 0 898 567" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="28" y="174" width="67" height="67" fill="url(#pattern0)" />
                        <rect x="743" y="367" width="75" height="75" fill="url(#pattern1)" />
                        <rect x="80" y="370" width="73" height="73" fill="url(#pattern2)" />
                        <path d="M318 162L399 100L479.5 108.5M318 162L236 252.5M318 162L479.5 108.5M318 162L267 262.5M318 162L371 192M318 162L260 97.5M479.5 108.5L546.5 115L585.5 170M479.5 108.5L371 192M479.5 108.5L475 197.5M585.5 170L638 192L666 284M585.5 170L475 197.5M585.5 170L546.5 293.5M585.5 170L647 108.5M666 284L672 403.5M666 284L638 389.5M666 284L546.5 293.5M666 284L779 231M672 403.5L592.5 497M672 403.5L638 389.5M672 403.5L720 406.5M592.5 497L499.5 558L430 549.5M592.5 497L430 549.5M592.5 497L638 389.5M592.5 497L515 419.5M430 549.5H362.5L333.5 486M430 549.5L333.5 486M430 549.5L515 419.5M430 549.5L417.5 443.5M333.5 486L274 468.5L243.5 384M333.5 486L243.5 384M333.5 486L417.5 443.5M243.5 384L236 252.5M243.5 384L267 262.5M243.5 384L304 389.5M243.5 384L177 400M236 252.5L267 262.5M236 252.5L121 225.5M267 262.5L304 389.5M267 262.5L362.5 269M267 262.5L371 192M638 389.5L515 419.5M638 389.5L546.5 293.5M304 389.5L417.5 443.5M304 389.5L362.5 269M362.5 269L371 192M362.5 269L475 197.5M362.5 269L546.5 293.5M362.5 269L417.5 443.5M371 192L475 197.5M475 197.5L546.5 293.5M546.5 293.5L417.5 443.5M546.5 293.5L515 419.5M417.5 443.5L515 419.5" stroke="url(#paint0_linear)" stroke-opacity="0.15" stroke-width="5" />
                        <circle cx="211" cy="62" r="61.5" stroke="white" />
                        <circle cx="62" cy="208" r="61.5" stroke="white" />
                        <circle cx="116" cy="406" r="61.5" stroke="white" />
                        <circle cx="687" cy="63" r="61.5" stroke="white" />
                        <circle cx="836" cy="207" r="61.5" stroke="white" />
                        <circle cx="781" cy="407" r="61.5" stroke="white" />
                        <circle cx="478.5" cy="109.5" r="6.5" fill="url(#paint1_radial)" />
                        <circle cx="399.5" cy="100.5" r="6.5" fill="url(#paint2_radial)" />
                        <circle cx="547.5" cy="115.5" r="6.5" fill="url(#paint3_radial)" />
                        <circle cx="546.5" cy="292.5" r="6.5" fill="url(#paint4_radial)" />
                        <circle cx="584.5" cy="169.5" r="6.5" fill="url(#paint5_radial)" />
                        <circle cx="364.5" cy="268.5" r="6.5" fill="url(#paint6_radial)" />
                        <circle cx="243.5" cy="382.5" r="6.5" fill="url(#paint7_radial)" />
                        <circle cx="333.5" cy="485.5" r="6.5" fill="url(#paint8_radial)" />
                        <circle cx="273.5" cy="467.5" r="6.5" fill="url(#paint9_radial)" />
                        <circle cx="361.5" cy="547.5" r="6.5" fill="url(#paint10_radial)" />
                        <circle cx="499.5" cy="557.5" r="6.5" fill="url(#paint11_radial)" />
                        <circle cx="591.5" cy="495.5" r="6.5" fill="url(#paint12_radial)" />
                        <circle cx="638.5" cy="389.5" r="6.5" fill="url(#paint13_radial)" />
                        <circle cx="665.5" cy="284.5" r="6.5" fill="url(#paint14_radial)" />
                        <circle cx="637.5" cy="192.5" r="6.5" fill="url(#paint15_radial)" />
                        <circle cx="317.5" cy="162.5" r="6.5" fill="url(#paint16_radial)" />
                        <circle cx="671.5" cy="402.5" r="6.5" fill="url(#paint17_radial)" />
                        <circle cx="303.5" cy="388.5" r="6.5" fill="url(#paint18_radial)" />
                        <circle cx="515.5" cy="418.5" r="6.5" fill="url(#paint19_radial)" />
                        <circle cx="417.5" cy="442.5" r="6.5" fill="url(#paint20_radial)" />
                        <circle cx="430.5" cy="547.5" r="6.5" fill="url(#paint21_radial)" />
                        <circle cx="475.5" cy="197.5" r="6.5" fill="url(#paint22_radial)" />
                        <circle cx="266.5" cy="262.5" r="6.5" fill="url(#paint23_radial)" />
                        <circle cx="237.5" cy="252.5" r="6.5" fill="url(#paint24_radial)" />
                        <circle cx="371.5" cy="191.5" r="6.5" fill="url(#paint25_radial)" />
                        <rect x="28" y="174" width="67" height="67" fill="url(#pattern3)" />
                        <rect x="743" y="367" width="75" height="75" fill="url(#pattern4)" />
                        <rect x="80" y="370" width="73" height="73" fill="url(#pattern5)" />
                        <g filter="url(#filter0_f)">
                            <path d="M318 162.5L399 100.5L479.5 109M318 162.5L236 253M318 162.5L479.5 109M318 162.5L267 263M318 162.5L371 192.5M318 162.5L260 98M479.5 109L546.5 115.5L585.5 170.5M479.5 109L371 192.5M479.5 109L475 198M585.5 170.5L638 192.5L666 284.5M585.5 170.5L475 198M585.5 170.5L546.5 294M585.5 170.5L647 109M666 284.5L672 404M666 284.5L638 390M666 284.5L546.5 294M666 284.5L779 231.5M672 404L592.5 497.5M672 404L638 390M672 404L720 407M592.5 497.5L499.5 558.5L430 550M592.5 497.5L430 550M592.5 497.5L638 390M592.5 497.5L515 420M430 550H362.5L333.5 486.5M430 550L333.5 486.5M430 550L515 420M430 550L417.5 444M333.5 486.5L274 469L243.5 384.5M333.5 486.5L243.5 384.5M333.5 486.5L417.5 444M243.5 384.5L236 253M243.5 384.5L267 263M243.5 384.5L304 390M243.5 384.5L177 400.5M236 253L267 263M236 253L121 226M267 263L304 390M267 263L362.5 269.5M267 263L371 192.5M638 390L515 420M638 390L546.5 294M304 390L417.5 444M304 390L362.5 269.5M362.5 269.5L371 192.5M362.5 269.5L475 198M362.5 269.5L546.5 294M362.5 269.5L417.5 444M371 192.5L475 198M475 198L546.5 294M546.5 294L417.5 444M546.5 294L515 420M417.5 444L515 420" stroke="white" stroke-opacity="0.1" stroke-width="8" />
                        </g>
                        <g filter="url(#filter1_f)">
                            <path d="M317 161.5L398 99.5L478.5 108M317 161.5L235 252M317 161.5L478.5 108M317 161.5L266 262M317 161.5L370 191.5M317 161.5L259 97M478.5 108L545.5 114.5L584.5 169.5M478.5 108L370 191.5M478.5 108L474 197M584.5 169.5L637 191.5L665 283.5M584.5 169.5L474 197M584.5 169.5L545.5 293M584.5 169.5L646 108M665 283.5L671 403M665 283.5L637 389M665 283.5L545.5 293M665 283.5L778 230.5M671 403L591.5 496.5M671 403L637 389M671 403L719 406M591.5 496.5L498.5 557.5L429 549M591.5 496.5L429 549M591.5 496.5L637 389M591.5 496.5L514 419M429 549H361.5L332.5 485.5M429 549L332.5 485.5M429 549L514 419M429 549L416.5 443M332.5 485.5L273 468L242.5 383.5M332.5 485.5L242.5 383.5M332.5 485.5L416.5 443M242.5 383.5L235 252M242.5 383.5L266 262M242.5 383.5L303 389M242.5 383.5L176 399.5M235 252L266 262M235 252L120 225M266 262L303 389M266 262L361.5 268.5M266 262L370 191.5M637 389L514 419M637 389L545.5 293M303 389L416.5 443M303 389L361.5 268.5M361.5 268.5L370 191.5M361.5 268.5L474 197M361.5 268.5L545.5 293M361.5 268.5L416.5 443M370 191.5L474 197M474 197L545.5 293M545.5 293L416.5 443M545.5 293L514 419M416.5 443L514 419" stroke="white" />
                        </g>
                        <g filter="url(#filter2_i)">
                            <path d="M318 161.5L399 99.5L479.5 108M318 161.5L236 252M318 161.5L479.5 108M318 161.5L267 262M318 161.5L371 191.5M318 161.5L260 97M479.5 108L546.5 114.5L585.5 169.5M479.5 108L371 191.5M479.5 108L475 197M585.5 169.5L638 191.5L666 283.5M585.5 169.5L475 197M585.5 169.5L546.5 293M585.5 169.5L647 108M666 283.5L672 403M666 283.5L638 389M666 283.5L546.5 293M666 283.5L779 230.5M672 403L592.5 496.5M672 403L638 389M672 403L720 406M592.5 496.5L499.5 557.5L430 549M592.5 496.5L430 549M592.5 496.5L638 389M592.5 496.5L515 419M430 549H362.5L333.5 485.5M430 549L333.5 485.5M430 549L515 419M430 549L417.5 443M333.5 485.5L274 468L243.5 383.5M333.5 485.5L243.5 383.5M333.5 485.5L417.5 443M243.5 383.5L236 252M243.5 383.5L267 262M243.5 383.5L304 389M243.5 383.5L177 399.5M236 252L267 262M236 252L121 225M267 262L304 389M267 262L362.5 268.5M267 262L371 191.5M638 389L515 419M638 389L546.5 293M304 389L417.5 443M304 389L362.5 268.5M362.5 268.5L371 191.5M362.5 268.5L475 197M362.5 268.5L546.5 293M362.5 268.5L417.5 443M371 191.5L475 197M475 197L546.5 293M546.5 293L417.5 443M546.5 293L515 419M417.5 443L515 419" stroke="white" />
                        </g>
                        <circle cx="211" cy="62" r="61.5" stroke="white" />
                        <circle cx="62" cy="208" r="61.5" stroke="white" />
                        <circle cx="116" cy="406" r="61.5" stroke="white" />
                        <circle cx="687" cy="63" r="61.5" stroke="white" />
                        <circle cx="836" cy="207" r="61.5" stroke="white" />
                        <circle cx="781" cy="407" r="61.5" stroke="white" />
                        <circle cx="478.5" cy="109.5" r="6.5" fill="url(#paint26_radial)" fill-opacity="0.6" />
                        <circle cx="399.5" cy="100.5" r="6.5" fill="url(#paint27_radial)" fill-opacity="0.6" />
                        <circle cx="547.5" cy="115.5" r="6.5" fill="url(#paint28_radial)" fill-opacity="0.6" />
                        <circle cx="546.5" cy="292.5" r="6.5" fill="url(#paint29_radial)" fill-opacity="0.6" />
                        <circle cx="584.5" cy="169.5" r="6.5" fill="url(#paint30_radial)" fill-opacity="0.6" />
                        <circle cx="364.5" cy="268.5" r="6.5" fill="url(#paint31_radial)" fill-opacity="0.6" />
                        <circle cx="243.5" cy="382.5" r="6.5" fill="url(#paint32_radial)" fill-opacity="0.6" />
                        <circle cx="333.5" cy="485.5" r="6.5" fill="url(#paint33_radial)" fill-opacity="0.6" />
                        <circle cx="273.5" cy="467.5" r="6.5" fill="url(#paint34_radial)" fill-opacity="0.6" />
                        <circle cx="361.5" cy="547.5" r="6.5" fill="url(#paint35_radial)" fill-opacity="0.6" />
                        <circle cx="499.5" cy="557.5" r="6.5" fill="url(#paint36_radial)" fill-opacity="0.6" />
                        <circle cx="591.5" cy="495.5" r="6.5" fill="url(#paint37_radial)" fill-opacity="0.6" />
                        <circle cx="638.5" cy="389.5" r="6.5" fill="url(#paint38_radial)" fill-opacity="0.6" />
                        <circle cx="665.5" cy="284.5" r="6.5" fill="url(#paint39_radial)" fill-opacity="0.6" />
                        <circle cx="637.5" cy="192.5" r="6.5" fill="url(#paint40_radial)" fill-opacity="0.6" />
                        <circle cx="317.5" cy="162.5" r="6.5" fill="url(#paint41_radial)" fill-opacity="0.6" />
                        <circle cx="671.5" cy="402.5" r="6.5" fill="url(#paint42_radial)" fill-opacity="0.6" />
                        <circle cx="303.5" cy="388.5" r="6.5" fill="url(#paint43_radial)" fill-opacity="0.6" />
                        <circle cx="515.5" cy="418.5" r="6.5" fill="url(#paint44_radial)" fill-opacity="0.6" />
                        <circle cx="417.5" cy="442.5" r="6.5" fill="url(#paint45_radial)" fill-opacity="0.6" />
                        <circle cx="430.5" cy="547.5" r="6.5" fill="url(#paint46_radial)" fill-opacity="0.6" />
                        <circle cx="475.5" cy="197.5" r="6.5" fill="url(#paint47_radial)" fill-opacity="0.6" />
                        <circle cx="266.5" cy="262.5" r="6.5" fill="url(#paint48_radial)" fill-opacity="0.6" />
                        <circle cx="237.5" cy="252.5" r="6.5" fill="url(#paint49_radial)" fill-opacity="0.6" />
                        <circle cx="371.5" cy="191.5" r="6.5" fill="url(#paint50_radial)" fill-opacity="0.6" />
                        <defs>
                            <filter id="filter0_f" x="116.086" y="91.3254" width="668.613" height="475.323" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
                            </filter>
                            <filter id="filter1_f" x="115.886" y="92.6658" width="666.327" height="469.353" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
                            </filter>
                            <filter id="filter2_i" x="120.886" y="96.6658" width="658.327" height="465.353" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                            </filter>
                            <linearGradient id="paint0_linear" x1="504" y1="151" x2="450" y2="558" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                            <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(478.5 109.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(399.5 100.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(547.5 115.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(546.5 292.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(584.5 169.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(364.5 268.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint7_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(243.5 382.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint8_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(333.5 485.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint9_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(273.5 467.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint10_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(361.5 547.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint11_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(499.5 557.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint12_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(591.5 495.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint13_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(638.5 389.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint14_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(665.5 284.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint15_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(637.5 192.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint16_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(317.5 162.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint17_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(671.5 402.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint18_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(303.5 388.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint19_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(515.5 418.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint20_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(417.5 442.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint21_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(430.5 547.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint22_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(475.5 197.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint23_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(266.5 262.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint24_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(237.5 252.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint25_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(371.5 191.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint26_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(478.5 109.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint27_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(399.5 100.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint28_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(547.5 115.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint29_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(546.5 292.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint30_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(584.5 169.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint31_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(364.5 268.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint32_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(243.5 382.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint33_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(333.5 485.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint34_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(273.5 467.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint35_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(361.5 547.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint36_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(499.5 557.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint37_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(591.5 495.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint38_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(638.5 389.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint39_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(665.5 284.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint40_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(637.5 192.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint41_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(317.5 162.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint42_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(671.5 402.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint43_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(303.5 388.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint44_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(515.5 418.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint45_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(417.5 442.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint46_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(430.5 547.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint47_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(475.5 197.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint48_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(266.5 262.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint49_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(237.5 252.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint50_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(371.5 191.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>


        </StyledEcosysteme>
    )
}
