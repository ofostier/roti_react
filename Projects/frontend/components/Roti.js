import Link from 'next/link';
import styled from 'styled-components';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import Moment from 'moment';
import ReactStars from "react-rating-stars-component";
import Rating from '@material-ui/lab/Rating';
//import PriceTag from './styles/PriceTag';
//import formatMoney from '../lib/formatMoney';
//import DeleteProduct from './DeleteProduct';
//import AddToCart from './AddToCart';

const RotiFooterStyles = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(2, auto);
  //align-items: stretch;
  //grid-template-columns: auto auto auto auto;
  border-top: 1px solid var(--lightGrey);
  border-color: var(--lightGrey);
  font-size: 1rem;
  color: var(--grey);
  //text-align: auto;
  //display: inline-grid;
  //grid-template-columns: repeat(4, auto);
  //align-items: stretch;
  //justify-content: center;
  //align-content: center;
  //margin: 0rem ;
  padding-right: 1rem;
  padding-left: 1rem;
  //border-top: 1px solid var(--lightGrey);
  .InfoVote {
    color: var(--grey);
  }
  .InfoDate {
    text-align: right;
    //justify-content: right;
    //align-content: right;
  }
`;

const BlockRating = styled.div`
  font-size: 1.5rem;
  color: var(--lightGrey);
  text-align: center;
  //display: inline-grid;
  //grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 0rem ;
  //padding-right: 1rem;
  border-top: 1px solid var(--lightGrey);
`;

function toDate(date) {
  return Moment(date).format('DD-MM-YYYY');
}

const ratingChanged = (newRating) => {
  console.log(newRating);
};

export default function Roti({ roti }) {
  //console.log(roti.votes);
  let countvote = 0;
  let summood = 0;
  let sumnote = 0;

  roti.votes.forEach(element => {
    countvote += 1
    sumnote += parseInt(element["note"]);
    summood += parseInt(element["mood"]);
  });
//console.log(sumnote)
//console.log(countvote)
  return (
    <ItemStyles>
      <Title>
        <Link href={`/roti/${roti.id}`}>{roti.subject}</Link>
      </Title>
      <p>{roti.description}</p>
      <BlockRating>
        <Rating 
          style={{fontSize:35, paddingTop:10}}
          name="vote" 
          value={sumnote/countvote}
          size="large"
          precision={0.1}
          readOnly
          //onChange={ratingChanged}
          //disabled 
        />
      </BlockRating>
      <RotiFooterStyles>
        <div className="InfoVote">Votes : {countvote}</div>
        <div className="InfoDate">{toDate(roti.datecreated, 'DD MMMM YYYY')}</div>
      </RotiFooterStyles>
      {/* <div className="buttonList">
        <Link
          href={{
            pathname: '/update',
            query: {
              id: product.id,
            },
          }}
        >
          Edit ✏️
        </Link>
        <AddToCart id={product.id} />
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div> */}
    </ItemStyles>
  );
}
