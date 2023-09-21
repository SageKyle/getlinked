import CritieriaSection from '../components/Criteria'
import FAQSection from '../components/FAQ'
import Hero from '../components/Hero'
import IdeaSection from '../components/IdeaSection'
import RulesSection from '../components/RulesSection'

export default function Home() {
	return (
		<section className="relative">
			<Hero />
			<IdeaSection />
			<RulesSection />
			<CritieriaSection />
			<FAQSection />
		</section>
	)
}
