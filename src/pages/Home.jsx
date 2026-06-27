import Container from '../components/layout/Container'
import Hero from '../components/home/Hero'
import StudentSpecials from '../components/home/StudentSpecials'
import NeighborhoodHighlight from '../components/home/NeighborhoodHighlight'

export default function Home() {
  return (
    <>
      <Hero />
      <Container className="mt-16 space-y-20">
        <StudentSpecials />
        <NeighborhoodHighlight />
      </Container>
    </>
  )
}
