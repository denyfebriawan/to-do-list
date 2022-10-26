import './list.css'

const List = () => {
 return (
    <div className='list-todo'>
        <h2>Study</h2>
        <p>context</p>
        <div className='btn-todo'>
            <button className='del-btn'>Delete</button>
            <button className='done-btn'>Done</button>
        </div>
    </div>
 );
}

export default List;