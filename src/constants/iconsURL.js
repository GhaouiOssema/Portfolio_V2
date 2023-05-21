import { github, linkedin, code_tag, facebook } from '../assets';

export const socialLink = (icon) => {
	icon === github
		? window.open('https://github.com/GhaouiOssema', '_blank')
		: icon === linkedin
		? window.open(
				'https://www.linkedin.com/in/oussema-ghaoui-624a171ba/',
				'_blank'
		  )
		: icon === code_tag
		? window.open(
				'https://developers.google.com/profile/u/OussemaGhaoui',
				'_blank'
		  )
		: icon === facebook
		? window.open('https://www.facebook.com/oussema.ghawi.222', '_blank')
		: null;
};

export const stringUrl = (text) => {
	text === '@Google Developers Summit Tunisia - GDS'
		? window.open(
				'https://www.linkedin.com/company/google-community-summit-tn/',
				'_blank'
		  )
		: text === '@AI Hack Tunisia 2022 ( Organizers Team )'
		? window.open('https://ai-hack-tunisia.com/', '_blank')
		: text === '@GDG RANDOTEK ( First edition )'
		? window.open(
				'https://www.facebook.com/events/903171040390540/903172823723695/',
				'_blank'
		  )
		: text === '@Google Developer Groups - Béja'
		? window.open('https://www.linkedin.com/company/gdg-beja/', '_blank')
		: text === '@GO MY CODE Center ( 1 months )'
		? window.open('https://gomycode.com/TN-FR/home', '_blank')
		: null;
};
