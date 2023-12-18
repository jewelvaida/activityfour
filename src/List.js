import React from 'react'

function List() {
    return (
      <div>
        <h2>To do List</h2>
        <form>
          <input type="text" placeholder="What are your tasks?" />
          <button>Submit</button>
        </form>
        <div>
          <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
          </ul>
        </div>
      </div>
    );
}

export default List