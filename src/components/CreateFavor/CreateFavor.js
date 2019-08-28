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
            <div class="form-section">
              <label for="favor-title">Favor title</label>
              <input type="text" name="favor-title" placeholder="Plant Flowers" required />
            </div>
            <div class="form-section">
              <label for="favor-summary">Favor Summary</label>
              <textarea name="favor-summary" rows="15"   required></textarea>
            </div>
            <div class="approximate-hours-container" class="form-section">
              <label for="hours">Approximate # hours required</label>
              <input type="number" name="hours-requested" placeholder="8" />
            </div>
            <div class="form-section">
              <h1>Select favor type</h1>


              <label for="favor-type">
                <span>Physical Favor</span>
                <div class="favor-type-explanation">These are any favors that require a phyisical effort to accomplish the goal.</div>
              </label>

              <input type="radio" name="favor-type" value="1" class="favor-type-radio" />
              <label for="favor-type">
                <span>Borrowing Items Favor</span>
                <div class="favor-type-explanation">A favor to borrow a material item</div>
              </label>

              <input type="radio" name="favor-type" value="2" class="favor-type-radio" />
              <label for="favor-type">
                <span>Intellectual Favor</span>
                <div class="favor-type-explanation">Any favor that does not require physical labor but instead it is itellectual. These might include questions, lessons, suggestions, and sharing of expertise.</div>
              </label>

              <input type="radio" name="favor-type" value="3" class="favor-type-radio" />
              <label for="favor-type">
                <span>Emotional Favor</span>
                <div class="favor-type-explanation">A favor request for emotional support.</div>
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
