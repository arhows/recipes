import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Recipelist from '../../components/Recipelist';

import './Search.css';

export default function Search() {
  const location = useLocation().search;
  const qryParams = new URLSearchParams(location);
  const query = qryParams.get('q');

  const url = `http://localhost:3000/recipes?q=${query}`;

  // get data from server
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading....</p>}
      {data && <Recipelist recipes={data} />}
    </div>
  );
}
