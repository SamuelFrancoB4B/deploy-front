interface ICategory {
    name: string;
    image?: string;
}

const categoriesMock: ICategory[] = [
    { name: 'Smartphones',
      image: 'https://http2.mlstatic.com/D_NQ_NP_896424-MLA71783367608_092023-O.webp'
     },
    { name: 'Laptops',
        image: 'https://http2.mlstatic.com/D_NQ_NP_896424-MLA71783367608_092023-O.webp'
     },
    { name: 'Tablets',
        image: 'https://http2.mlstatic.com/D_NQ_NP_896424-MLA71783367608_092023-O.webp'
     },
    { name: 'Headphones',
        image: 'https://http2.mlstatic.com/D_NQ_NP_896424-MLA71783367608_092023-O.webp'
     },
    { name: 'Cameras' },
    { name: 'Printers' },
    { name: 'Monitors' },
    { name: 'Storage' },
    { name: 'Accessories' }
];

export default categoriesMock;