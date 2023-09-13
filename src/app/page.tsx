'use client'

import { useState } from 'react'
import Card, { getCompanyTag } from '@/components/Card'
import FilterPanel from '@/components/FIlterPanel'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import companies from '../data.json'

const Home = () => {
  const [tagsFilter, setTagsFilter] = useState<Array<string>>([])

  const getFilteredCompanies = () => {
    return tagsFilter.length === 0
      ? companies
      : companies.filter((companyProps) =>
          tagsFilter.every((tag) => getCompanyTag(companyProps).includes(tag)),
        )
  }

  const addTagToFilter = (newTag: string) => {
    setTagsFilter([...new Set([...tagsFilter, newTag])])
  }

  const removeTagFromFilter = (removeTag: string) => {
    setTagsFilter(tagsFilter.filter((tag) => tag !== removeTag))
  }

  const clearTagsFilter = () => {
    setTagsFilter([])
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center gap-14 px-10 py-16 md:gap-6">
        <FilterPanel
          tags={tagsFilter}
          removeTagFromFilter={removeTagFromFilter}
          clearTagsFilter={clearTagsFilter}
        />
        {getFilteredCompanies().map((values) => (
          <Card key={values.id} addTagToFilter={addTagToFilter} {...values} />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default Home
