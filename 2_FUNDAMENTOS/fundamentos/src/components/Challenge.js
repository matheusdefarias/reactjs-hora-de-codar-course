const Challenge = () => {

    const val1 = 10;
    const val2 = 5;

    const handleSum = () => {
        console.log(val1 + val2);
    }

    return (
        <div>
            <p>Valor 1: {val1}</p>
            <p>Valor 2: {val2}</p>
            <button onClick={handleSum}>Somar valores</button>
        </div>
    );
}

export default Challenge;