
interface ViewModeProps {
  view: 'grid' | 'list';
  setView: React.Dispatch<React.SetStateAction<'grid' | 'list'>>;
}

export default function ViewMode({ view, setView }: ViewModeProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={() => setView('grid')}
        className={`flex h-9 w-9 items-center justify-center rounded-lg border ${
          view === 'grid' ? 'bg-slate-800 text-white' : 'bg-white text-slate-600'
        }`}
      >
        <span className="text-xs">Grid</span>
      </button>
      <button
        onClick={() => setView('list')}
        className={`flex h-9 w-9 items-center justify-center rounded-lg border ${
          view === 'list' ? 'bg-slate-800 text-white' : 'bg-white text-slate-600'
        }`}
      >
        <span className="text-xs">List</span>
      </button>
    </div>
  )
}
