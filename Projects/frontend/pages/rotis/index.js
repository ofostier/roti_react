import { useRouter } from 'next/dist/client/router';
//import Pagination from '../../components/Pagination';
import Rotis from '../../components/Rotis';

export default function OrderPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      {/* <Pagination page={page || 1} /> */}
      <Rotis page={page || 1} />
      {/* <Pagination page={page || 1} /> */}
    </div>
  );
}
