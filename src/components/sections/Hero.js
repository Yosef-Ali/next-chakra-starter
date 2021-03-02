import React from 'react';
import PropTypes from 'prop-types';
import {
	Box,
	Button,
	Flex,
	Image,
	Heading,
	Stack,
	Text,
	Link,
	Container,
	useColorModeValue,
} from '@chakra-ui/react';

export function Hero({ title, subtitle, image, ctaLink, ctaText, ...rest }) {
	return (
		<Container
			maxW={{ lg: 'container.xl' }}
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
		>
			<Flex
				align='center'
				justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
				direction={{ base: 'column-reverse', md: 'row' }}
				wrap='no-wrap'
				minH='70vh'
				px={{ base: 0, sm: 4, md: 8 }}
				mb={16}
				{...rest}
			>
				<Stack
					spacing={4}
					w={{ base: '80%', md: '40%' }}
					align={[ 'center', 'center', 'flex-start', 'flex-start' ]}
				>
					<Heading
						as='h1'
						size='xl'
						fontWeight='bold'
						color={useColorModeValue('brand.600', 'brand.400')}
						textAlign={[ 'center', 'center', 'left', 'left' ]}
					>
						{title}
					</Heading>
					<Heading
						as='h2'
						size='md'
						color={'gray.500'}
						opacity='0.8'
						fontWeight='normal'
						lineHeight={1.5}
						textAlign={[ 'center', 'center', 'left', 'left' ]}
					>
						{subtitle}
					</Heading>
					<Link to={ctaLink}>
						<Button colorScheme='brand' py='4' px='4' size='md'>
							{ctaText}
						</Button>
					</Link>
					<Text
						fontSize='xs'
						mt={2}
						textAlign='center'
						color='brand.800'
						opacity='0.6'
					>
						No credit card required.
					</Text>
				</Stack>
				<Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
					<Image src={image} size='100%' rounded='1rem' shadow='lg' />
				</Box>
			</Flex>
		</Container>
	);
}

Hero.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	image: PropTypes.string,
	ctaText: PropTypes.string,
	ctaLink: PropTypes.string,
};

Hero.defaultProps = {
	title: 'React landing page with Chakra UI',
	subtitle:
		'This is the subheader section where you describe the basic benefits of your product',
	image: 'https://source.unsplash.com/collection/404339/800x600',
	ctaText: 'Create your account now',
	ctaLink: '/signup',
};
