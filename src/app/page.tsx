import HeroSection from '@/app/_components/heroSection/index.tsx';
import OurProjects from '@/app/_components/ourProjects/index.tsx';
import Partners from '@/app/_components/partners/index.tsx';
import Summit from '@/app/_components/summit/index.tsx';
import MainLayout from '@/components/MainLayout';
import Newsletter from '@/components/newsletter/Newsletter';

export default function Home() {
	return (
		<MainLayout heroSection={<HeroSection />}>
			<Summit />
			<Partners />
			<OurProjects />
			<Newsletter />
		</MainLayout>
	);
}
