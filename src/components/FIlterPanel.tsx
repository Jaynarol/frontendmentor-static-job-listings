import Tag from '@/components/Tags'

const FilterPanel = () => {
  return (
    <div className="-mt-9 mb-5 flex w-full min-w-[300px] max-w-6xl justify-between gap-5 rounded-md bg-white px-8 py-5 shadow-lg">
      <div className="flex flex-wrap gap-3">
        <Tag text="JavaScript" isOnFilterPanel />
        <Tag text="React" isOnFilterPanel />
        <Tag text="FullStack" isOnFilterPanel />
        <Tag text="Pyhon" isOnFilterPanel />
        <Tag text="Senior" isOnFilterPanel />
        <Tag text="Frontend" isOnFilterPanel />
      </div>
      <button className="text-lg font-bold text-primary hover:underline">
        Clear
      </button>
    </div>
  )
}

export default FilterPanel
