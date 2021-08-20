import users from "./users.js"


const User = () => {
    return (
        <div>
            {
                users.map((el) => (
                    <>
                        <h5>{el.name}</h5>
                        <h5>{el.email}</h5>
                    </>
                )
                )
            }
        </div>
    )
}

export default User