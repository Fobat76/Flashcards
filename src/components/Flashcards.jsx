import { useState } from 'react';

export default function Flashcards({ data }) {

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function Next() {
    if (index === data.length - 1)  {
      setIndex(0);
      setShow(false)
      return;
    }
    setIndex(index + 1);
    setShow(false)
  }
  
    function Previous() {
        if (index === 0) {
            setIndex(data.length - 1);
            return;
        }
        setIndex(index - 1);
    }

    const backgroundcolor=  {
        backgroundColor: data[index].color
    }

    function Shuffle(){
      data = data.sort( () => Math.random()-0.5 );
      setIndex(Math.floor(Math.random() * data.length));
      setShow(false);
    }

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    }

    function Submit(){
      if(inputValue == data[index].name){
        alert("Correct")
        setInputValue('')
        setIndex(Math.floor(Math.random() * data.length));
        setShow(false);
      }
      else if(inputValue == ''){
        alert("Enter Value")
      }
      else{
        alert("Wrong")
      }
    }

    function Show(){
      setShow(!show)
    }
  return (
    <>
    <div className='Flashcard' style={backgroundcolor}>
      <h1 className="Flashcard-Title">{show ? data[index].name : "Pokemon?"}</h1>
      <img className="Flashcard-Img" src={data[index].img} alt={data[index].name} />
    </div>
    <div className='Flashcard-Buttons'>
        <button onClick={Previous}>Previous</button>
        <button onClick={Show}>Show</button>
        <button onClick={Next}>Next</button>
        <button onClick={Shuffle}>Shuffle</button>
        <input type="text" onChange={handleInputChange}></input>
        <button onClick={Submit}>Submit</button>
    </div>
    </> 
  );
}
