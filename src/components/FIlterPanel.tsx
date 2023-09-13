import { FC } from 'react'

type Props = {
  tags: Array<string>
  removeTagFromFilter: (tag: string) => void
  clearTagsFilter: () => void
}

const FilterPanel: FC<Props> = ({
  tags,
  removeTagFromFilter,
  clearTagsFilter,
}) => {
  if (tags.length === 0) {
    return null
  }

  return (
    <div className="mb-3 mt-[-8.2rem] flex w-full min-w-[300px] max-w-6xl justify-between gap-5 rounded-md bg-white px-8 py-5 shadow-lg transition duration-100 ease-in-out">
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <div key={tag} className="flex">
            <span className="rounded-l-md bg-secondary-light px-2 pt-1 text-lg font-bold text-primary duration-200">
              {tag}
            </span>
            <button
              onClick={() => removeTagFromFilter(tag)}
              className="rounded-r-md bg-primary px-2 pt-1 text-lg text-secondary-light duration-200 hover:bg-secondary-dark hover:text-secondary-light"
            >
              ✖
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={clearTagsFilter}
        className="text-lg font-bold text-primary hover:underline"
      >
        Clear
      </button>
    </div>
  )
}

export default FilterPanel
