import React from 'react';

const Form = () => {
    return (
        <form className="form mt-auto py-3 bg-dark">
  <div >
    <label for= "location" className="form-label"> Location</label>
    <input id= "location" className="form-control" type="text"></input>
  </div>
  <div >
    <label for= "synopsis" className="form-label"> Synopsis</label>
    <input id= "synopsis" className="form-control" type="text"></input>
  </div>
  <div >
    <label for= "category" className="form-label"> Category</label>
    <input id= "category" className="form-control" type="text"></input>
  </div>

  <div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
    )
}

export default Form