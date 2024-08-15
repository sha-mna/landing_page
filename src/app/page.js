import Image from "next/image";
import Header from "./components/header";
import SectionOne from "./components/sectionOne";
import Services from "./components/services";
import Team from "./components/team";
import Footer from "./components/footer";



export default function Home() {
	return (
		<container>
			
			<Header />
			<SectionOne />
			<Services />
			<Team />
			<Footer />

		</container>
	);
}
