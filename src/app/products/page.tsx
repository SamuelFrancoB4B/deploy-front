import Card from "@/components/Card/Card"
import Grid from "@/components/Grid/Grid"
import IProduct from "@/interfaces/Iproduct"
import { getProductsService } from "@/services/productsService"

const page = async () => {
  const url = process.env.API_URL + "/products";
    const products = await getProductsService(url)

  return (
    <main className="container">
      <div className="padding-section">
        <h1 className="mb-20">Products</h1>
        <Grid>
          {products.map((product: IProduct, i:number) => (
            <Card key={i} product={product} />
          ))}
        </Grid>
      </div>
    </main>
  )
}

export default page