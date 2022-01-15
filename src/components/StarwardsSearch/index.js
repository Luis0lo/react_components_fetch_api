import { useState, useEffect } from 'react';
// import ListOfStarwards from '../ListOfStarwards';
// import ExpandInfo from '../ExpandInfo'
import Input from '../Input';
import Button from '../Button';

const Starwards = () => {
  //create a state to set the name to fetch
  const [search, setSearch] = useState('');
  //need a state to hold the data back
  const [starwards, setStarward] = useState('');
  const [listOfStarwards, setListOfStarwards] = useState('Search simething');
  //state from the button when click to expand
  const [expand, setExpand] = useState(false);

  //first check what data you get from the api
  useEffect(() => {
    async function getStarward() {
      const res = await fetch(`https://swapi.dev/api/people?search=${search}`);
      const data = await res.json();

      setStarward({
        name: data.results[0].name,
        birth_year: data.results[0]['birth_year'],
        gender: data.results[0].gender,
        height: data.results[0].height,
        mass: data.results[0].mass,
      });
      setListOfStarwards(data.results);
      //   console.log(data.results);
    }
    getStarward();
  }, [starwards, search]);

  //   console.log(listOfStarwards);

  function handleExpand(name) {
    setExpand(true);
    setSearch(name);
  }

  function handleChange(e) {
    setExpand(false);
    setSearch(e.target.value);
  }

  if (expand)
    return (
      <div>
        <h3>{starwards.name}</h3>
        <p>
          <em>Gender: </em>
          {starwards.gender}
        </p>
        <p>
          <em>Height: </em>
          {starwards.height}
        </p>
        <p>
          <em>Mass:</em> {starwards.mass}
        </p>
        {/* <button
          onClick={() => {
            setExpand(false);
          }}
        >
          Another Search
        </button> */}
        <Button text={'Another Search'} onClick={() => setExpand(false)} />
      </div>
    );

  return listOfStarwards ? (
    <div>
      <hr />
      <Input searchOnChange={handleChange} />

      <h2>Best guess: {starwards.name}</h2>

      <hr />
      <h1>Possible Stars</h1>
      {search &&
        !expand &&
        listOfStarwards.map((star, i) => {
          return (
            <div key={i}>
              <h3>{star.name}</h3>
              <Button text={'Expand'} onClick={() => handleExpand(star.name)} />
              <hr />
            </div>
          );
        })}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Starwards;
