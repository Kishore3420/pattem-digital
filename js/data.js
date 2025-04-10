export const locationAttributes = [
	{
		country: 'India',
		branch: 'Bengaluru',
		address:
			'No.293/154/174, 4th Floor, Indiqube Gamma Building, Outer Ring Rd, Opposite to JP Morgan, Bangalore, Karnataka 560103',
		position: {
			top: '53.7',
			left: '70.55',
		},
	},
	{
		country: 'India',
		branch: 'Chennai',
		address: 'No.293/154/172, Outer Ring Road, 4th Floor, Kadubeeansahalli, Chennai, Tamilnadu 560103.',
		position: {
			top: '52.75',
			left: '71.5',
		},
	},
	{
		country: 'USA',
		branch: 'San Jose',
		address: '240 E Gish Rd, Sandy, CA 95112',
		position: {
			top: '41.45',
			left: '11.75',
		},
	},
	{
		country: 'USA',
		branch: 'Sandy',
		address: '240 E Gish Rd, San Jose, CA 95112 ',
		position: {
			top: '32.9',
			left: '14.58',
		},
	},
	{
		country: 'Singapore',
		branch: 'Banta Tengeh',
		address: 'No.293/154/172, Outer Ring Road, 4th Floor, Kadubeeansahalli, Banta Tengeh, Singapore 560103.',
		position: {
			top: '62.25',
			left: '77.05',
		},
	},
	{
		country: 'Singapore',
		branch: 'Chia Keng',
		address: 'No.293/154/172, Outer Ring Road, 4th Floor, Kadubeeansahalli, Chia Keng, Singapore 560103.',
		position: {
			top: '63.25',
			left: '78',
		},
	},
];
export const cardList = [
	{
		title: 'Join our team',
		contact: 'HR Team | +91-9008862428',
		email: 'work@pattemdigital.com',
		iconImg: '../assets/images/profile.svg',
	},
	{
		title: 'Project Enquiry',
		contact: 'Board-line | +91-9901337558',
		email: 'business@pattemdigital.com',
		iconImg: '../assets/images/message.svg',
	},
	{
		title: 'Vendor Enquiry',
		contact: 'Board-line | +91-9901337558',
		email: 'marketing@pattemdigital.com',
		iconImg: '../assets/images/enquiry.svg',
	},
	{
		title: 'Everything else',
		contact: 'Board-line | +91-9901337558',
		email: 'hello@pattemdigital.com',
		iconImg: '../assets/images/thumb.svg',
	},
];
export const officeLocations = [
	{
		countryName: 'India',
		locations: [
			{
				name: 'Bangalore',
				address:
					'No.293/154/174, 4th Floor, Indiqube Gamma Building, Outer Ring Rd, Opposite to JP Morgan, Bangalore, Karnataka 560103 ',
				phoneNumber: '+91-9901337558',
				googleLocation: '#',
				gallery: [
					'../assets/images/gallery1.png',
					'../assets/images/nodejs.png',
					'../assets/images/youtube.png',
					'../assets/images/mern.png',
				],
			},
			{
				name: 'Chennai',
				address: 'No.293/154/172, Outer Ring Road, 4th Floor, Kadubeeansahalli, Chennai, Tamilnadu 560103.',
				phoneNumber: '+91-9901337558',
				googleLocation: '#',
				gallery: ['../assets/images/youtube.png', '../assets/images/mern.png'],
			},
			{
				name: 'Bangalore',
				address:
					'No.293/154/174, 4th Floor, Indiqube Gamma Building, Outer Ring Rd, Opposite to JP Morgan, Bangalore, Karnataka 560103 ',
				phoneNumber: '+91-9901337558',
				googleLocation: '#',
			},
			{
				name: 'Chennai',
				address: 'No.293/154/172, Outer Ring Road, 4th Floor, Kadubeeansahalli, Chennai, Tamilnadu 560103.',
				phoneNumber: '+91-9901337558',
				googleLocation: '#',
			},
			{
				name: 'Bangalore',
				address:
					'No.293/154/174, 4th Floor, Indiqube Gamma Building, Outer Ring Rd, Opposite to JP Morgan, Bangalore, Karnataka 560103 ',
				phoneNumber: '+91-9901337558',
				googleLocation: '#',
			},
		],
		isLoadMore: false,
	},
	{
		countryName: 'USA',
		locations: [
			{
				name: 'Sandy',
				address: '240 E Gish Rd, Sandy, CA 95112 ',
				phoneNumber: '+91-9901337558',
				googleLocation: '#',
			},
			{
				name: 'San Jose',
				address: '240 E Gish Rd, San Jose, CA 95112 ',
				phoneNumber: '+91-9901337558',
				googleLocation: '#',
			},
			{
				name: 'San Jose',
				address: '240 E Gish Rd, San Jose, CA 95112 ',
				phoneNumber: '+91-9901337558',
				googleLocation: '#',
			},
		],
		isLoadMore: false,
	},
];
export const inputElements = [
	{
		labelText: 'Name',
		id: 'name',
		type: 'text',
		name: 'Name',
		minLength: 2,
		placeholder: 'Enter your name',
		isRequired: true,
		errorMessage: 'Please enter a valid name',
	},
	{
		labelText: 'Email',
		id: 'email',
		type: 'email',
		name: 'Email',
		minLength: 5,
		placeholder: 'Enter your email address',
		isRequired: true,
		errorMessage: 'Please enter a valid email address',
	},
	{
		labelText: 'Phone',
		id: 'phone',
		type: 'tel',
		name: 'Phone',
		minLength: 10,
		placeholder: 'Enter your phone number',
		isRequired: true,
		errorMessage: 'Please enter a valid phone number',
	},
];
export const textAreaElements = [
	{
		labelText: 'Comments',
		id: 'comments',
		name: 'Comments',
		placeholder: 'How can we help you?',
		isRequired: true,
		errorMessage: 'Please enter your message',
	},
];
export const caseStudiesData = [
	{
		title: 'The future of health care',
		description:
			"Skip long queues. Experience next-gen health care solutions built with React JS, Next JS and dot net. Stay connected to doctors 24/7 or get a doctor on call on demand. We're revolutionizing health care around the world with cutting-edge technology.",
		tags: [
			'Health care app',
			'User-friendly healthcare app',
			'Digital health platform',
			'Patient engagement',
			'Telehealth solution',
		],
		link: '/casestudy/the-future-of-healthcare-insurance/',
		thumb: 'https://pattemdigital.com/production/wp-content/themes/pattemwp/assets/images/home-page/casestudy/hospital.webp',
		altText: 'Healthcare mobile application showing doctor consultation interface',
	},
	{
		title: 'E-commerce Redefined!',
		description:
			"Is this the future of online shopping? We've reinvented the buying experience for shoppers with Next JS, AEM, Sitecore, and Magento for all the shoppers. Let your shoppers enjoy a bespoke shopping journey with accelerated checkouts and tailored shopping recommendations. Shop the latest celeb trends with the help of your app.",
		tags: [
			'E-commerce App',
			'Tailor-made shopping App',
			'Personalized shopping experience',
			'AI-powered recommendations',
		],
		link: '/casestudy/e-commerce-redefined/',
		thumb: 'https://pattemdigital.com/production/wp-content/themes/pattemwp/assets/images/home-page/casestudy/ecommerce.webp',
		altText: 'E-commerce app interface showing product listings and shopping cart',
	},
	{
		title: 'Travel like a pro',
		description:
			'Streamline your next trip, and go on a vacation in just a few swipes. Get deals on your flight tickets and travel like a local with customized suggestions and in-app translations with built-in AEM and Native Mobile apps. Planning your travels is now a breezy affair with our new app!',
		tags: [
			'Vacation Planning App',
			'All-in-one travel app',
			'Effortless vacation planning',
			'Local experiences',
			'Travel deals',
		],
		link: '/casestudy/travel-tinder-style/',
		thumb: 'https://pattemdigital.com/production/wp-content/themes/pattemwp/assets/images/home-page/casestudy/travel.webp',
		altText: 'Travel app interface showing destination search and booking features',
	},
	{
		title: 'Bank easy with us',
		description:
			'Experience the future of banking. We offer a convenient banking experience with our latest cutting-edge front-end technology, React JS, AEM, Vue JS, and Next JS with mobile apps, that comprises sleek dashboards for all your accounts. See all your investments in one place, eliminate the tedious forms, and enhance efficiency.',
		tags: [
			'All-in-one banking app',
			'Manage multiple accounts in one place',
			'Smart money management app',
			'Secure banking',
			'Investment tracking',
		],
		link: '/casestudy/omnichannel-banking/',
		thumb: 'https://pattemdigital.com/production/wp-content/themes/pattemwp/assets/images/home-page/casestudy/banking.webp',
		altText: 'Banking app dashboard showing account overview and transaction history',
	},
];
