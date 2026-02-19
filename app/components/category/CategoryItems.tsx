
interface CategoryItemsProps {
  title:string;
  items:{
    id:number;
    name:string;
    total:number;
  }[];

}

export default function CategoryItems({title,items}:CategoryItemsProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold py-2 uppercase">{title}</h2>
      <div className="pt-2">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center gap-2">
            <h3>{item.name}</h3>
            <p className="text-sm font-semibold">{item.total}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
