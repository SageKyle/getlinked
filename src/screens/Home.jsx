import AwardSection from '../components/AwardSection'
import CritieriaSection from '../components/Criteria'
import FAQSection from '../components/FAQ'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import IdeaSection from '../components/IdeaSection'
import PartnersSection from '../components/PartnersSection'
import PolicySection from '../components/PolicySection'
import RulesSection from '../components/RulesSection'

export default function Home() {
	return (
		<section className="relative">
			<Hero />
			<IdeaSection />
			<RulesSection />
			<CritieriaSection />
			<FAQSection />
			<AwardSection />
			<PartnersSection />
			<PolicySection />
			<Footer />
		</section>
	)
}
