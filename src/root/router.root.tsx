import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/home/home-page';
import { DetailPage } from '../pages/products/detail/detail-page';
import { ProductsPage } from '../pages/products/products-page';

export const rootRouter = createBrowserRouter([
  {
    path: '',
    element: <HomePage />,
  },
  {
    path: 'products',
    element: <ProductsPage />,
    children: [
      {
        path: 'detail/:id',
        element: <DetailPage />,
      },
    ],
  },
]);
