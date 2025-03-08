import { useState } from 'react';

export default function Flashcards({ data }) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
    function Next() {
        if (show) {
            if (index === data.length - 1) {
              setIndex(0); 
            } else {
              setIndex(index + 1);
            }
            setShow(false);
          } else {
            setShow(true);
          }
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

  return (
    <>
    <div className='Flashcard' style={backgroundcolor}>
      <h1 className="Flashcard-Title">{show ? data[index].name : "Pokemon?"}</h1>
      <img className="Flashcard-Img" src={data[index].img} alt={data[index].name} />
    </div>
    <div className='Flashcard-Buttons'>
        <button onClick={Previous}>Previous</button>
        <button onClick={Next}>{show ? 'Next' : 'Show'}</button>
    </div>
    </> 
  );
}
