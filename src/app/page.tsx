import HomePage from '@/components/screens/HomePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'I love you lipusya',
	description: 'You my cat',
}

export default function Home() {
	return <HomePage />
}
