import styles from './Features.module.css'
import { productsMock } from "../../mocks/products"
import Card from '../Card/Card';
import Grid from '../Grid/Grid';
import { getProductsService } from '@/services/productsService';
import IProduct from '@/interfaces/Iproduct';

const Features = async () => {
  const url = process.env.API_URL + "/products";
  const products = await getProductsService(url)
  const features = products.slice(0, 4);
  return (
    <div className='container'>
      <div className='padding-section'>
        <h2 className='mb-14'>Features</h2>
        <Grid>
          {
            features.map((product: IProduct, i:number) => (
              <Card key={i} product={product} />
            ))
          }
        </Grid>
      </div>
    </div>
  )
}

export default Features