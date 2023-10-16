import Footer from '../components/Footer'
import AwardSection from '../components/home/AwardSection'
import CritieriaSection from '../components/home/Criteria'
import FAQSection from '../components/home/FAQ'
import Hero from '../components/home/Hero'
import IdeaSection from '../components/home/IdeaSection'
import PartnersSection from '../components/home/PartnersSection'
import PolicySection from '../components/home/PolicySection'
import RulesSection from '../components/home/RulesSection'
import TimelineSection from '../components/home/TimelineSection'
import Navbar from '../components/Navbar'

export default function Home() {
	return (
		<>
			<Navbar />
			<section className="relative overflow-x-hidden">
				<Hero />
				<IdeaSection />
				<RulesSection />
				<CritieriaSection />
				<FAQSection />
				<TimelineSection />
				<AwardSection />
				<PartnersSection />
				<PolicySection />
				<Footer />
			</section>
		</>
	)
}
