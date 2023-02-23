/* eslint-disable no-console */
import * as R from 'ramda';

const items = [
  { id: 'a', title: 'title a' },
  { id: 'b', title: 'title b' },
];

const ItemPage = ({ id, vars, item }) => {
  console.log(id);
  console.log(vars);

  return (
    <div>
      <div>id: {id}</div>
      <div>title: {item ? item.title : 'item not found'}</div>
      <div>vars: {R.join(' / ', vars)}</div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const { id, vars } = params;

  console.log(id);
  console.log(vars);

  return {
    props: {
      id,
      vars: vars || [],
      item: R.find(R.propEq('id', id), items) || null,
    },
  };
};

export const getStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export default ItemPage;
