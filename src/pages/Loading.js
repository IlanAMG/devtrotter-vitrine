import React from 'react'
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "../utils/VisibilitySensor";

import StyledLoading from '../styles/StyledLoading'

export const Loading = ({ opacityLoading}) => {

    return (
        <StyledLoading finish={opacityLoading}>
            <svg width="40%" height="40%" viewBox="0 0 74 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M55.5042 21.545L37 11.2835L55.5042 0V21.545Z" fill="#afafaf">
                    <animate attributeName="fill" from="#afafaf" to="#7EC4A4" begin="0ms" dur="300ms" fill="freeze"/>
                    {/* 1 */}
                </path>
                <path d="M55.5042 43.0899L37 32.8284L55.5042 21.5449V43.0899Z" fill="#6b6b6b">
                    <animate attributeName="fill" from="#6b6b6b" to="#277E5E" begin="900ms" dur="300ms" fill="freeze"/>
                    {/* 3 */}
                </path>
                <path d="M37 54.3651L18.5042 44.1035L37 32.8201V54.3651Z" fill="#a7a7a7">
                    <animate attributeName="fill" from="#a7a7a7" to="#09B5D6" begin="2000ms" dur="300ms" fill="freeze"/>
                    {/* 5 */}
                </path>
                <path d="M18.5042 65.657L0 55.3955L18.5042 44.1121V65.657Z" fill="#8f8f8f">
                    <animate attributeName="fill" from="#8f8f8f" to="#0D95B0" begin="2500ms" dur="200ms" fill="freeze"/>
                    {/* 7 */}
                </path>
                <path d="M55.5042 107.675L37 97.4215L55.5042 86.1296V107.675Z" fill="#444444">
                    <animate attributeName="fill" from="#444444" to="#753E90" begin="3090ms" dur="30ms" fill="freeze"/>
                    {/* 15 */}
                </path>
                <path d="M74 96.3912L55.5042 86.1297L74 74.8462V96.3912Z" fill="#404040">
                    <animate attributeName="fill" from="#404040" to="#484999" begin="3150ms" dur="30ms" fill="freeze"/>
                    {/* 17 */}
                </path>
                <path d="M37 119L18.5042 108.738L37 97.4465V119Z" fill="#2b2b2b">
                    <animate attributeName="fill" from="#2b2b2b" to="#492778" begin="3050ms" dur="60ms" fill="freeze"/>
                    {/* 13 */}
                </path>
                <path d="M18.5042 108.755L0 98.4937L18.5042 87.2102V108.755Z" fill="#303030">
                    <animate attributeName="fill" from="#303030" to="#3E3680" begin="2980ms" dur="90ms" fill="freeze"/>
                    {/* 11 */}
                </path>
                <path d="M18.5042 87.2104L0 76.9488L18.5042 65.657V87.2104Z" fill="#4b4b4b">
                    <animate attributeName="fill" from="#4b4b4b" to="#56519E" begin="2850ms" dur="150ms" fill="freeze"/>
                    {/* 9 */}
                </path>
                <path d="M37 11.2751L55.5042 21.5367L37 32.8201V11.2751Z" fill="#a4a4a4">
                    <animate attributeName="fill" from="#a4a4a4" to="#48B48C" begin="400ms" dur="300ms" fill="freeze"/>
                    {/* 2 */}
                </path>
                <path d="M37 32.8201L55.5042 43.0816L37 54.3651V32.8201Z" fill="#acacac">
                    <animate attributeName="fill" from="#acacac" to="#3EBEE4" begin="1400ms" dur="300ms" fill="freeze"/>
                    {/* 4 */}
                </path>
                <path d="M18.5042 44.1121L37 54.3736L18.5042 65.657V44.1121Z" fill="#afafaf">
                    <animate attributeName="fill" from="#afafaf" to="#52C2EA" begin="2300ms" dur="200ms" fill="freeze"/>
                    {/* 6 */}
                </path>
                <path d="M0 76.9487L18.5042 87.2102L0 98.4937V76.9487Z" fill="#595959">
                    <animate attributeName="fill" from="#595959" to="#5E5CA6" begin="2900ms" dur="100ms" fill="freeze"/>
                    {/* 10 */}
                </path>
                <path d="M37 97.4465L55.5042 107.716L37 119V97.4465Z" fill="#646464">
                    <animate attributeName="fill" from="#646464" to="#875BA2" begin="3060ms" dur="30ms" fill="freeze"/>
                    {/* 14 */}
                </path>
                <path d="M18.5042 87.2102L37 97.4717L18.5042 108.755V87.2102Z" fill="#555555">
                    <animate attributeName="fill" from="#555555" to="#6E56A0" begin="3030ms" dur="70ms" fill="freeze"/>
                    {/* 12 */}
                </path>
                <path d="M55.5042 86.1296L74 96.3912L55.5042 107.675V86.1296Z" fill="#747474">
                    <animate attributeName="fill" from="#747474" to="#6F6FB2" begin="3120ms" dur="30ms" fill="freeze"/>
                    {/* 16 */}
                </path>
                <path d="M55.5042 64.5847L74 74.8462L55.5042 86.1297V64.5847Z" fill="#969696">
                    <animate attributeName="fill" from="#969696" to="#6E92C7" begin="3200ms" dur="50ms" fill="freeze"/>
                    {/* 18 */}
                </path>
                <path d="M0 55.4038L18.5042 65.6653L0 76.9488V55.4038Z" fill="#898989">
                    <animate attributeName="fill" from="#898989" to="#6F81BF" begin="2700ms" dur="150ms" fill="freeze"/>
                    {/* 8 */}
                </path>
            </svg>
            <VisibilitySensor partialVisiblity offset={{ top: -100 }} intervalDelay={1000} delayedCall once>
                {({ isVisible }) => (
                    <Spring
                        to={{
                            opacity: isVisible ? 0.55 : 0,
                            transform: isVisible
                                ? "translateY(0)"
                                : "translateY(100px)",
                        }}>
                        {(props) => (
                            <p style={{ ...props }}>Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie.</p>
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
        </StyledLoading>
    )
}
