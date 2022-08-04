import {auth} from '../firebase'

const Blank = () => {
    return (
        <>
    <div>This is Blank page</div>;
    <button onClick={()=>auth.signOut()}>Logout</button>
        </>
    )

};

export default Blank;