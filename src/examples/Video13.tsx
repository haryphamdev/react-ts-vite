const Video13 = () => {
    //props là javascript object

    const person = {
        name: 'Eric',
        age: 25,
        address: 'Hỏi Dân IT'
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
    const { name, age, address } = person;


    return (
        <div>
            Example in video 13 - hello word
        </div>
    )
}

export default Video13;