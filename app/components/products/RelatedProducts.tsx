import OfferedProducts from './OfferedProducts';
import { IProduct } from '@/app/redux/types/THighlighted';


interface RelatedProductsProps {
  payload: IProduct[];
}
export default function RelatedProducts({payload}  : RelatedProductsProps) {

  return (
    <div>
      <OfferedProducts rows={2} preview={2} title1='Related' title2='Products' subtitle='Related Products' products={payload} />
    </div>
  )
}
