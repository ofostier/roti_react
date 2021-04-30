import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import { TagCloud } from 'react-tagcloud'
import getTagsList from '../lib/getTagsList';

const GridStyles = styled.div`
  //display: grid;
  //grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  //grid-template-columns: 4fr;
  //grid-gap: 2rem;
  text-align: center;
  border: 1px solid var(--lightGrey);
  h1 {
    margin: 0px;
    padding: 0px;
    display: block;
  }
  h2 {
    text-align:center;
    //line-height:0.1em;
    position:relative;
    //margin:10px 0 20px; 
    padding-top:1rem;
    background:#FFF;
  }
  h2 span{
    padding: 2rem;
    background:#FFF;
    z-index:2;
    position: relative;
  }
    h2:before{
    content:'';
      position:absolute;
      display:block;
      top:50%;
      height:1px;
      width: 90%;
      background: var(--grey);
      left:50%;
      z-index:1;
      transform:translateX(-50%);
      -webkit-transform:translateX(-50%);
  }
  p {
    display: block;
    margin: 0;
    padding: 0;
  }
  .subheader {
    display: block;
    font-size: 1.2rem;
    line-height: 1.5rem;
    font-weight: 300;
    padding: 0.5rem;
    margin: -1rem;
    color: var(--grey);
  }
`;
const GridResults= styled.div`
  display: grid;
  //grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  font-size: 4.5rem;
  
  align-items: stretch;
  justify-content: center;
  align-content: center;
  //border: 1px solid var(--lightGrey);
  text-align: center;
  padding:auto;
  margin:auto;
  label {
    display: block;
    padding:0;
    margin: -2rem;
    font-size: 1.5rem;
    color: var(--grey)
  }
`;
const GridResultsDetailsStyles= styled.div`
  font-family: Arial, sans-serif;
  display: grid;
  //grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  //padding:2rem;
  margin: 2rem;
  border-bottom: 1px solid var(--lightGrey);
  //margin:auto;
  //font-size: 4.5rem;
  /* div {
    //text-align: left;
  } */
  .content {
    //border-bottom: 1px solid var(--lightGrey);
  }
  .label {
    @font-family: "Roboto";
    text-align:left;
    font-size: 1.5rem;
    font-weight: 200;
    padding:0;
    margin:0;
    line-height:1.6rem;
  }
  .name {
    text-align:left;
    font-size: 1rem;
    font-weight: 200;
    padding:0;
    margin:0;
    color: #4183c4;
    //line-height:1rem;
  }
  .rating {
    text-align:right;
    vertical-align: -25px;
  }
`;

function getTotalNotes(data){
  var total = 0;
  //console.log(data.votes)
  data.votes.map(vote => {
     //console.log(vote.note);
    //console.log(roti._votesMeta.count)
    total += parseInt(vote.note);
  })
  return total;
}
function getTotalMood(data){
  var total = 0;
  //console.log(data.votes)
  data.votes.map(vote => {
     //console.log(vote.note);
    //console.log(roti._votesMeta.count)
    total += parseInt(vote.mood);
  })
  return total;
}


export default function SurveyResultDetail( {roti} ) {

  //console.log(roti.votes);
  const note = roti._votesMeta.count > 0 ? getTotalNotes(roti) / roti._votesMeta.count: 0;
  const mood = roti._votesMeta.count > 0 ? getTotalMood(roti) / roti._votesMeta.count: 0;

  // const tagList = [
  //   { value: 'JavaScript', count: 38 },
  //   { value: 'React', count: 30 },
  //   { value: 'Nodejs', count: 28 },
  //   { value: 'Express.js', count: 25 },
  //   { value: 'HTML5', count: 33 },
  //   { value: 'MongoDB', count: 18 },
  //   { value: 'CSS3', count: 20 },
  // ]; 
  
  const dataCloud = getTagsList(roti);
  const optionsCloud = {
    luminosity: 'dark',
    hue: 'orange',
  }

  return (
    <GridStyles>
      <h1>
        {roti.subject}
        <div className="subheader">
          Mardi 20 avril 2021 11:08<br/><small>il y a 8 jours</small>
        </div>
      </h1>
      
      <h2><span>Results</span></h2>
      <GridResults>
        <div>{roti._votesMeta.count}
          <span>
            <label>PLAYERS</label>
          </span>
        </div>
        <div>{mood}<label>MOOD</label></div>
        <div>
          {parseInt(note)}
          <label>
          <Rating
          style={{fontSize:25}}
          id="note"
          name="note" 
          size="large"
          precision={0.5}
          defaultValue={note}
          readOnly
        ></Rating>
          </label>
        </div>
      </GridResults>
      <h2><span>Details</span></h2>   
        {
          roti.votes.length===0?<p>Waiting for some votes</p>:''
        }
        {roti.votes.map((vote) => (
            <GridResultsDetailsStyles key={vote.id}>
            <div className='content'>
              <div className='label'>
                "{vote.comment}"
              </div>
              <div className="name">{vote.name}</div>
            </div>
            <div className='rating'>
              <Rating 
                style={{fontSize:15, verticalAlign:'bottom'}}
                id="note"
                name="note" 
                size="large"
                precision={0.5}
                defaultValue={parseInt(vote.note)}
                readOnly
              ></Rating>
            </div>
          </GridResultsDetailsStyles>
          ))}
        
          <TagCloud
            minSize={14}
            maxSize={40}
            tags={dataCloud}
            colorOptions={optionsCloud}
            onClick={tag => alert(`'${tag.value}' was selected!`)}
          />
    </GridStyles>
  )
}

