import { CardList } from "../../components/monsters/card-list/card-list.component";

function MonsterPage(props) {
  return <CardList monsters={props.monsters} />;
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const monsters = await response.json();
  return {
    props: {
      monsters: monsters,
    },
    revalidate: 6000,
  };
}

export default MonsterPage;
