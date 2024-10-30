import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../redux/reducers/reducer";

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count)
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' , justifyContent:'center',alignItems:'center'
      }}>
        <h1>{count}</h1>
        <button style={{backgroundColor:'lightblue', width: '250px',height:'50px',marginRight:'2rem',cursor:'pointer'}} onClick={() => dispatch(increment())}>Increment</button>
        <button style={{backgroundColor:'lightblue', width: '250px',height:'50px', marginRight:'2rem',cursor:'pointer'}} onClick={() => dispatch(decrement())}>Decrement</button>
        <button style={{backgroundColor:'lightblue', width: '250px',height:'50px',cursor:'pointer'}} onClick={() => dispatch(reset())}>Reset</button>
      </div>
    )
}

export default Counter;