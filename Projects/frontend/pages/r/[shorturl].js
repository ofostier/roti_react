import VoteRoti from '../../components/VoteRoti';

export default function SingleRotiPage({ query }) {
  //console.log(query)
  //console.log("########")
  return <VoteRoti shorturl={query.shorturl} />;
}
