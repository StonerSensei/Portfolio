import React from 'react';
import './why.css';
import codechef from './images/codechef.png';
import leetcode from './images/leetcode.png';
import { motion } from 'framer-motion';

const WhyHireMe = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                delay: 0.2,
                duration: 0.5
            }}
            viewport={{
                once: true
            }}
        >
            <h2 className='heading1'>Why Hire Me?</h2>
            <div className="neww">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -120
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                >
                    <div className="box">
                        <img src={codechef} alt="Codechef" className='why_logo' />
                        <h4 className='mid_text'>3★</h4>
                        <p className='main_text_why'>Codechef Rating</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 120
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                >
                    <div className="box">
                        <img src={leetcode} alt="LeetCode" className='why_logo' />
                        <h4 className='mid_text'>200</h4>
                        <p className='main_text_why'>LeetCode Problems Solved</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default WhyHireMe;
