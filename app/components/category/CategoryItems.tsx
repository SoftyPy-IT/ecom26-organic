import { TCategory } from '@/app/redux/types/TCategory';

interface CategoryItemsProps {
  title: string;
  payload: TCategory[];
}

export default function CategoryItems({ payload, title }: CategoryItemsProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold py-2 uppercase">{title}</h2>
      <div className="pt-2">
        {payload.map((item: TCategory) => (
          <div key={item._id} className="flex justify-between items-center gap-2">
            <h3>{item.name}</h3>
            <p className="text-sm font-semibold">{item.productCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
