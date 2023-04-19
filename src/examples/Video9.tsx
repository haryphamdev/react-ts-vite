import { useState } from "react";

const Video9 = () => {
    const [name, setName] = useState<number | string>(10);
    setName("eric")
    return (
        <div>Example video 9:  hello world + {name}</div>
    )
}

export default Video9;