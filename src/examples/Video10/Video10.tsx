import { useState } from "react";
import './Video10.css'

export interface ITest {
    name: string;
    age: number
}

interface IUser {
    name: string;
    age: number | string;
    city: string;
}

interface IProps {
    defautName: string;
    defaultAge: number | string;
}
const Video10 = (props: IProps) => {
    const { defautName, defaultAge } = props;
    //todo: gán default value, đồng thời định nghĩa props cho component
    const [name, setName] = useState<string>(defautName);
    const [age, setAge] = useState<number | string>(defaultAge);

    const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);

    const [selectedCity, setSelectedCity] = useState<string>("Hà Nội");

    const [users, setUsers] = useState<IUser[]>([])


    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        const user = {
            name: name,
            age: age,
            city: selectedCity
        }
        // users.push(user); //modify state directly
        // setUsers(users)

        setUsers([...users, user]) //spread syntax
        setName("");
        setAge("");
    }

    const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    return (
        <>
            <div>Example video 10:  hello world </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input
                        type="text"
                        value={name}
                        onChange={handleOnChangeName}
                    /><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input
                        onChange={(event) => setAge(event.target.value)}
                        type="text" value={age} /><br />
                </div>
                <div>
                    <label >City:</label><br />
                    <select
                        onChange={(event) => setSelectedCity(event.target.value)}
                    >
                        {city.map(item => {
                            return (
                                <option key={item} value={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>

                <input
                    type="submit"
                    value="Submit"
                    onClick={handleSubmit}
                />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            < th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return (
                                <tr key={user.name}>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.city}</td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video10;