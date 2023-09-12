import Card, { CardProps } from '@/components/Card'
import Header from '@/components/Header'
import data from '../data.json'

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center gap-14 p-12">
        {data.map((values) => (
          <Card key={values.id} {...values} />
        ))}
      </main>
    </>
  )
}

export default Home
