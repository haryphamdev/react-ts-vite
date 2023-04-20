import { useState } from "react";
import './Video10.css'
const Video10 = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [city, setCity] = useState(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);

    const [users, setUsers] = useState([
        { name: "Eric", age: 25, city: "Hà Nội" },
        { name: "Eric1", age: 26, city: "Đà Nẵng" },
        { name: "Eric2", age: 27, city: "Hồ Chí Minh" },
    ])

    const [isShowBtn, setIsShowBtn] = useState(false);



    return (
        <>
            <div>Example video 10:  hello world </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input type="text" value="John" /><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input type="text" value="Doe" /><br />
                </div>
                <div>
                    <label >City:</label><br />
                    <select>
                        <option>Hà Nội</option>
                        <option>Đà Nẵng</option>
                        <option>Hồ Chí Minh</option>
                    </select>
                </div>

                <input type="submit" value="Submit" />
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
                        <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Eve</td>
                            <td>Jackson</td>
                            <td>94</td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>80</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video10;