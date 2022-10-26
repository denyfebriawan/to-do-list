import './form.css'

const Form = () => {
    return (
        <div className='container-form'>

            <label className='input-label'>Title :</label>
            <input type="text" className='input-box'/>

            <label className='input-label'>Context :</label>
            <input type="text" className='input-box' />

            <button className='input-button'>Add</button>
        </div>
    );
}

export default Form;