import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { socialMediaIcons } from "../constants";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { socialLink } from "../constants/webLinks";

const Footer = () => {
    return (
        <div className={`mt-20 bg-black-100 rounded-[20px]`} id="education">
            <div
                className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[270px]`}>
                <motion.div variants={textVariant()}>
                    <h2
                        className={`${styles.sectionHeadText}`}>
                        Connect with <span className="text-[#915EFF]">Me.</span>
                    </h2>
                </motion.div>
            </div>
            <div
                className={`-mt-20 pb-14 ${styles.paddingX} flex flex-col flex-wrap gap-7`}>
                <motion.div
                    variants={fadeIn("", "spring", 2 * 0.5, 0.75)}
                    className="bg-black-200 p-10 rounded-3xl w-full">
                    {socialMediaIcons.map((account, index) => (
                        <motion.div
                            options={{
                                max: 45,
                                scale: 1,
                                speed: 450,
                            }}
                            className="bg-tertiary p-5 rounded-2xl">
                            <br />
                            <div className="flex justify-center items-center">
                                {account.Icons.map((item, i) => (
                                    <p
                                        key={i}
                                        className="w-[6rem] h-[8vh] flex justify-center items-center text-secondary text-[14px]">
                                        <div
                                            onClick={() => socialLink(item)}
                                            className="black-gradient w-14 h-14 rounded-full flex flex-row justify-center items-center cursor-pointer">
                                            <img
                                                src={item}
                                                alt="source code"
                                                className="w-10 h-10 object-contain"
                                            />
                                        </div>
                                    </p>
                                ))}
                            </div>
                            <br />

                            <div className="mt-4 flex justify-center flex-wrap gap-2">
                                {account.tags.map((tag) => (
                                    <p
                                        key={`${name}-${tag.name}`}
                                        className={`text-[14px] ${tag.color}`}>
                                        #{tag.name}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default SectionWrapper(Footer, "footer");
