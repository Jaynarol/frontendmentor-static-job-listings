import Card from '@/components/Card'
import FilterPanel from '@/components/FIlterPanel'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import data from '../data.json'

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center gap-14 px-10 md:gap-6">
        <FilterPanel />

        {data.map((values) => (
          <Card key={values.id} {...values} />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default Home
