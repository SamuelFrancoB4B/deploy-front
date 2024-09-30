import IProduct from "@/interfaces/Iproduct";

export const getProductsService = async (url: string) => { 
    const res = await fetch(url, {next: {revalidate: 0}});
    const products = await res.json();

    return products;
};

export const getProductById = async (url: string, id: string) => {
    const res = await getProductsService(url);
    const product = res.filter((item: IProduct) =>item.id.toString() === id)[0];

    return product;
}