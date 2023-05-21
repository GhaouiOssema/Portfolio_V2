import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({
	index,
	testimonial,
	name,
	designation,
	company,
	image,
	eduType,
	universityName,
	field,
	date,
	link,
	courses,
}) => (
	<motion.div
		variants={fadeIn('', 'spring', index * 0.5, 0.75)}
		className='bg-black-200 p-10 rounded-3xl w-full'>
		<div className='mt-1'>
			<p className='text-white font-black text-[48px] flex'>
				"<span className='text-[38px]'>{eduType}</span>
			</p>
			<p className='text-white tracking-wider text-[18px] md:text-[18px] xs:text-sm'>
				{eduType === 'University'
					? universityName
					: eduType === "Certification Degree's"
					? courses.map((item, index) => (
							<div className='flex items-center mt-4' key={index}>
								<div className='w-2 h-2 rounded-full bg-white mr-2' />
								<p>{item}</p>
							</div>
					  ))
					: eduType === "Scholarship Degree's" &&
					  courses.map((item, index) => (
							<div className='flex items-center mt-4' key={index}>
								<div className='w-2 h-2 rounded-full bg-white mr-2' />
								<p>{item}</p>
							</div>
					  ))}
			</p>
			{eduType === 'University' && (
				<div className='flex flex-wrap gap-2 items-center xs:text-sm'>
					<div className='w-2 h-2 rounded-full bg-white mt-3' />
					<p className='mt-3 md:mt-3 xs:mt-0'>{field}</p>
				</div>
			)}
			<div className='mt-7 flex justify-start items-center gap-1'>
				<div className='flex-1 flex flex-col'>
					<p className='text-white font-medium text-[16px] cursor-pointer'>
						{eduType === 'University' ? (
							<>
								<span className='blue-text-gradient'>@</span>
								<span
									className='hover:underline'
									onClick={() => window.open(link, '_blank')}>
									{name}
								</span>
							</>
						) : eduType === "Certification Degree's" ? (
							<div className='flex w-[340px] justify-between'>
								<div className='flex items-center'>
									<span className='blue-text-gradient'>
										@
									</span>
									<span
										className='hover:underline'
										onClick={() =>
											window.open(link[0], '_blank')
										}>
										{name[0]}
									</span>
								</div>
								<div className='flex'>
									<span className='blue-text-gradient'>
										@
									</span>
									<span
										className='hover:underline'
										onClick={() =>
											window.open(link[1], '_blank')
										}>
										{name[1]}
									</span>
								</div>
							</div>
						) : eduType === "Scholarship Degree's" ? (
							<div className='flex'>
								<span className='blue-text-gradient'>@</span>
								<span
									className='hover:underline'
									onClick={() => window.open(link, '_blank')}>
									{name}
								</span>
							</div>
						) : (
							name
						)}
						<p className='mt-1 ml-5 text-secondary text-[12px]'>
							{date}
						</p>
					</p>
				</div>
				{eduType === "Certification Degree's" ? (
					image.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`feedback_by-${name}`}
							className='w-[80px] h-[80px] rounded-full object-cover'
						/>
					))
				) : (
					<img
						src={image}
						alt={`feedback_by-${name}`}
						className='w-[80px] h-[80px] rounded-full object-cover'
					/>
				)}
			</div>
		</div>
	</motion.div>
);

const Feedbacks = () => {
	return (
		<div className={`mt-12 bg-black-100 rounded-[20px]`} id='education'>
			<div
				className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
				<motion.div variants={textVariant()}>
					<h2 className={styles.sectionHeadText}>Education.</h2>
				</motion.div>
			</div>
			<div
				className={`-mt-20 pb-14 ${styles.paddingX} flex flex-col flex-wrap gap-7`}>
				{testimonials.map((testimonial, index) => (
					<FeedbackCard
						key={testimonial.name}
						index={index}
						{...testimonial}
					/>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Feedbacks, '');
