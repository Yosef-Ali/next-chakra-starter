import { Hero } from '../components/sections/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { NavBar } from '../components/NavBar';
import { Header } from '../components/sections/Header';
import { Header1 } from '../components/sections/Header-1';
import { SmallFooter } from '../components/sections/SmallFooter';
import { FooterWithForm } from '../components/sections/FooterWithForm';
import { HeroSplitScreen } from '../components/sections/HeroSplitScreen';
import { CallToActionWithVideo } from '../components/sections/CallToActionWithVideo';
import { GridListWithHeading } from '../components/sections/GridListWithHeading';
import { AuthenticationForm } from '../components/ui/AuthenticationForm/AuthenticationForm';

const Index = () => (
	<Container>
		<NavBar />
		<Header />
		<Header1 />
		{/* <Hero /> */}
		<HeroSplitScreen />
		<CallToActionWithVideo />
		<GridListWithHeading />
		<AuthenticationForm />

		{/* <Main /> */}
		<FooterWithForm />
		<SmallFooter />
	</Container>
);

export default Index;
