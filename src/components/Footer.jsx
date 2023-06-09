import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { socialMediaIcons } from '../constants';
import { slideIn } from '../utils/motion';
import { socialLink } from '../constants/iconsURL';

const Footer = () => {
	return (
		<div className='flex flex-wrap gap-7'>
			{socialMediaIcons.map((account, index) => (
				<motion.div
					variants={slideIn('left', 'tween', 0.5, 1)}
					key={index}
					className='w-full'>
					<motion.div
						options={{
							max: 45,
							scale: 1,
							speed: 450,
						}}
						className='bg-tertiary p-5 rounded-2xl'>
						<div className='mt-5'>
							<h3 className='text-white font-bold text-[24px] text-center'>
								{account.name}
							</h3>
						</div>
						<br />
						<div className='flex justify-center items-center'>
							{account.Icons.map((item, i) => (
								<p
									key={i}
									className='w-[6rem] h-[8vh] flex justify-center items-center text-secondary text-[14px]'>
									<div
										onClick={() => socialLink(item)}
										className='black-gradient w-14 h-14 rounded-full flex flex-row justify-center items-center cursor-pointer'>
										<img
											src={item}
											alt='source code'
											className='w-10 h-10 object-contain'
										/>
									</div>
								</p>
							))}
						</div>
						<br />

						<div className='mt-4 flex justify-center flex-wrap gap-2'>
							{account.tags.map((tag) => (
								<p
									key={`${name}-${tag.name}`}
									className={`text-[14px] ${tag.color}`}>
									#{tag.name}
								</p>
							))}
						</div>
					</motion.div>
				</motion.div>
			))}
		</div>
	);
};

export default SectionWrapper(Footer, 'footer');
