import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import PropTypes from 'prop-types';
//import { withStyles, makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';


const style = {
  //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 10,
  fontSize: 50,
  border: 0,
  height: 30,
  //padding: '0 30px',
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}
IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
    fontSize: 40,
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

const ThxFeedBackStyles = styled.div`
box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
background: rgba(0, 0, 0, 0.02);
border: 5px solid white;
padding: 20px;
font-size: 1.5rem;
line-height: 1.5;
font-weight: 600;
`
const BlockResultFeedBackStyle = styled.div`
  /* display: grid;
  grid-auto-columns: 1fr 1fr; */
  display: inline-grid;
  grid-template-columns: repeat(2, 50%);
  //grid-auto-flow: column;
  //max-width: var(--maxWidth);
  //align-items: stretch;
  //grid-template-columns: auto auto auto auto;
  border-top: 1px solid var(--lightGrey);
  //border-color: var(--lightGrey);
  font-size: 1rem;
  color: var(--grey);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  width: 100%;
`;
const BlockNote = styled.div`
  font-size: 2rem;
  color: var(--grey);
  text-align: center;
  justify-content: center;
  align-content: center;
  margin: 0rem ;
  width: 100%;
`;
const BlockMood = styled.div`
  font-size: 2rem;
  color: var(--grey);
  text-align: center;
  justify-content: center;
  align-content: center;
  margin: 0rem ;
  padding-top: 10px;
  width: 100%;
  border-top: 1px solid var(--grey);
  display: block;

`;
const BlockRating = styled.div`
  font-size: 2rem;
  color: var(--grey);
  text-align: center;
  align-items: stretch;
  justify-content: right;
  align-content: right;
  margin: 0rem ;
  padding: 0;
  //border: 1px solid var(--lightGrey);
  p {
    padding: 0;
    margin: 20px 0 2px 0;
  }
`;

const ALL_ROTI_VOTES_QUERY = gql`
  query ALL_ROTI_VOTES_QUERY($id: ID!) {
    allVotes (where: {rotis_some:{id: $id} })
    {
      id
      name
      email
      note
      mood
      rotis {id}
    }
  }
`;

export default function ThxFeedBack ( {id} ) {

  const { data, loading, error } = useQuery(ALL_ROTI_VOTES_QUERY, {
    variables: {
      id,
    },
    refetchQueries: [{ query: ALL_ROTI_VOTES_QUERY }],
  });
  if (loading ) return <p>Voting...</p>;
  const { Votes } = data;

  let countvote = 0;
  let summood = 0;
  let sumnote = 0;
  // console.log(data.allVotes);

  data.allVotes.forEach(vote => {
    // console.log(vote.id);
    // console.log(vote.note);
    // console.log(Object.values(vote.rotis));
    countvote += 1
    sumnote += parseInt(vote.note);
    summood += parseInt(vote.mood);
  });
  return(
    <ThxFeedBackStyles>
      Thanks for your feedback !!
      <BlockResultFeedBackStyle>
        <BlockNote>
          <p>{countvote} <br/>VOTES</p>
        </BlockNote>
        <BlockRating>
          <p>{(sumnote/countvote).toFixed(1)}</p>
          <Rating 
            id="note"
            name="note" 
            size="large"
            precision={0.5}
            defaultValue={sumnote/countvote}
            //value={3}
            //onChange={handleChange}
            //disabled 
            readOnly
            //icon={<FavoriteIcon fontSize="20px" />}

          />
        </BlockRating>
        
      </BlockResultFeedBackStyle>
      <BlockMood>
        Mood <br/>
        <Rating
            style={style}
            name="customized-icons"
            defaultValue={summood}
            //getLabelText={(value) => customIcons[value].label}
            //IconContainerComponent={IconContainer}
            icon={<FavoriteIcon fontSize="inherit" />}
            max={1}
            readOnly
          />
      </BlockMood>
    </ThxFeedBackStyles>
  )
}