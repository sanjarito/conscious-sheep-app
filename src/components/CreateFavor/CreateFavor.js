import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './CreateFavor.css'

export default class CreateFavor extends Component {
    render() {
      return (
        <main role="main">
        <header>
          <h1>New Favor Request</h1>
        </header>
        <section>
          <form id="new-favor">
            <div className="form-section">
              <label htmlFor="favor-title">Favor title</label>
              <input type="text" name="favor-title" placeholder="Plant Flowers" required />
            </div>
            <div className="form-section">
              <label htmlFor="favor-summary">Favor Summary</label>
              <textarea name="favor-summary" rows="15"   required></textarea>
            </div>
            <div className="approximate-hours-container form-section">
              <label htmlFor="hours">Approximate # hours required</label>
              <input type="number" name="hours-requested" placeholder="8" />
            </div>
            <div className="form-section">
              <h1>Select favor type</h1>


              <label htmlFor="favor-type">
                <span>Physical Favor</span>
                <div className="favor-type-explanation">These are any favors that require a phyisical effort to accomplish the goal.</div>
              </label>

              <input type="radio" name="favor-type" value="1" className="favor-type-radio" />
              <label htmlFor="favor-type">
                <span>Borrowing Items Favor</span>
                <div className="favor-type-explanation">A favor to borrow a material item</div>
              </label>

              <input type="radio" name="favor-type" value="2" className="favor-type-radio" />
              <label htmlFor="favor-type">
                <span>Intellectual Favor</span>
                <div className="favor-type-explanation">Any favor that does not require physical labor but instead it is itellectual. These might include questions, lessons, suggestions, and sharing of expertise.</div>
              </label>

              <input type="radio" name="favor-type" value="3" className="favor-type-radio" />
              <label htmlFor="favor-type">
                <span>Emotional Favor</span>
                <div className="favor-type-explanation">A favor request for emotional support.</div>
              </label>


            </div>



            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </form>
        </section>
      </main>
     )
   }
}
