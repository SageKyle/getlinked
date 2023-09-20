import Hero from '../components/Hero'
import IdeaSection from '../components/IdeaSection'
import RulesSection from '../components/RulesSection'

export default function Home() {
	return (
		<section className="relative">
			<Hero />
			<IdeaSection />
			<RulesSection />
		</section>
	)
}
