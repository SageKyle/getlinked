import AwardSection from '../components/AwardSection'
import CritieriaSection from '../components/Criteria'
import FAQSection from '../components/FAQ'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import IdeaSection from '../components/IdeaSection'
import PartnersSection from '../components/PartnersSection'
import PolicySection from '../components/PolicySection'
import RulesSection from '../components/RulesSection'
import TimelineSection from '../components/TimelineSection'

export default function Home() {
	return (
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
	)
}
