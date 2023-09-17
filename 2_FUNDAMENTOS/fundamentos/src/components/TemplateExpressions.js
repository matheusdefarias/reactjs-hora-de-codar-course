const TemplateExpressions = () => {

    const data = {
        name: "Matheus",
        age: 31,
        job: "Programmer",
    }

    return (
        <div>
            <h1>Olá {data.name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
        </div>
    );
}

export default TemplateExpressions;