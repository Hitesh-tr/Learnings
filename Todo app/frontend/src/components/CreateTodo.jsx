
export function CreateTodo() {
    const inputStyle = {
        backgroundColor: "#ffffe6",
        padding: "10px",
        margin: "10px",
        border: "1px solid black",
        borderRadius: "5px"
    }

    const buttonStyle = {
        backgroundColor: "#ccebff",
        padding: "10px",
        margin: "10px",
        border: "1px solid black",
        borderRadius: "5px"
    }

    const divStyle = {
        backgroundColor: "#ccffff",
    }
    return (
        <div style={divStyle}>
            <input style={inputStyle} id="title" type="text" placeholder="title"></input> <br />
            <input style={inputStyle} id="description" type="text" placeholder="description"></input> <br />
            <button style={buttonStyle} onClick={() => {
            // axios
            fetch("http://localhost:3000/addtodos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo added");
                })
            }}>Add Task</button>
        </div>
    )
}