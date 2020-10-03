import React from "react"

import Layout from "../components/index"
import Seo from "../components/other/seo"
import Container from "../components/layout/container";

const DemoPage = () => (
  <Layout>
    <Seo title="Demo" />
    <Container>
      <h1>Demo Page</h1>
      <p>This page should be used for demonstrating the elements of the theme.</p>
      <h1>Heading One</h1>
      <h2>Heading Two</h2>
      <h3>Heading Three</h3>
      <h4>Heading Four</h4>
      <h5>Heading Five</h5>
      <h6>Heading Six</h6>
      <p>Paragraph.</p>
      <p>Long paragraph - ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta tellus quis diam auctor,
        quis
        facilisis nibh imperdiet. Nulla vel metus tempor, maximus metus vitae, aliquet orci. Nunc lectus ligula,
        facilisis
        vel neque non, scelerisque cursus tellus. Aliquam imperdiet magna mauris, non consequat lacus interdum vel. Nam
        ultrices metus vel lacinia pulvinar. In viverra enim ut purus condimentum sollicitudin. Ut nisl lorem, volutpat
        sed
        augue id, tincidunt porttitor elit. Sed vel est sit amet nibh condimentum tincidunt. Curabitur scelerisque
        dapibus
        nibh vehicula tristique. Suspendisse semper nulla nisl. Etiam posuere enim at libero mattis rhoncus. Ut tempus
        risus
        tellus, et dictum purus malesuada id. Ut aliquet felis et nisl aliquam, nec interdum est ornare.</p>
      <p><b>Bold text</b> in a single paragraph with <i>italicized</i> text and <u>text with underscore</u> all in one
        sentence. <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">This is</a> how a link should be displayed.</p>
      <p>Unordered list:</p>
      <ul>
        <li>This is a sample list item</li>
        <li>This is a sample list item</li>
        <li>This is a sample list item</li>
        <li>This is a sample list item</li>
        <li>This is a sample list item</li>
      </ul>
      <p>Ordered list:</p>
      <ol>
        <li>This is a sample list item</li>
        <li>This is a sample list item</li>
        <li>This is a sample list item</li>
        <li>This is a sample list item</li>
        <li>This is a sample list item</li>
      </ol>
      <p>Definition Lists</p>
      <dl>
        <dt>Definition Term</dt>
        <dd>Definition Description goes here and explains the term</dd>
        <dt>Definition Term</dt>
        <dd>Definition Description goes here and explains the term</dd>
        <dt>Definition Term</dt>
        <dd>Definition Description goes here and explains the term</dd>
        <dt>Definition Term</dt>
        <dd>Definition Description goes here and explains the term</dd>
      </dl>
      <p>Table</p>
      <table>
        <thead>
        <tr>
          <th>Column</th>
          <th>Column</th>
          <th>Column</th>
          <th>Column</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td>Footer</td>
          <td>Footer</td>
          <td>Footer</td>
          <td>Footer</td>
        </tr>
        </tfoot>
      </table>
      <p>Blockquote</p>
      <blockquote>
        <p>Long paragraph - ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta tellus quis diam
          auctor, quis facilisis nibh imperdiet. Nulla vel metus tempor, maximus metus vitae, aliquet orci. Nunc lectus ligula,
          facilisis vel neque non, scelerisque cursus tellus. Aliquam imperdiet magna mauris, non consequat lacus interdum vel.
          Nam ultrices metus vel lacinia pulvinar. In viverra enim ut purus condimentum sollicitudin. Ut nisl lorem,
          volutpat sed augue id, tincidunt porttitor elit. Sed vel est sit amet nibh condimentum tincidunt. Curabitur scelerisque
          dapibus nibh vehicula tristique. Suspendisse semper nulla nisl. Etiam posuere enim at libero mattis rhoncus. Ut
          tempus risus tellus, et dictum purus malesuada id. Ut aliquet felis et nisl aliquam, nec interdum est ornare.</p>
        <cite>Author of this quote</cite>
      </blockquote>
      <p>Forms</p>
      <fieldset id="forms__input">
        <legend>Input fields</legend>
        <p>
          <label htmlFor="input__text">Text Input</label>
          <input id="input__text" type="text" placeholder="Text Input" />
        </p>
        <p>
          <label htmlFor="input__password">Password</label>
          <input id="input__password" type="password" placeholder="Type your Password" />
        </p>
        <p>
          <label htmlFor="input__webaddress">Web Address</label>
          <input id="input__webaddress" type="url" placeholder="http://yoursite.com" />
        </p>
        <p>
          <label htmlFor="input__emailaddress">Email Address</label>
          <input id="input__emailaddress" type="email" placeholder="name@email.com" />
        </p>
        <p>
          <label htmlFor="input__phone">Phone Number</label>
          <input id="input__phone" type="tel" placeholder="(999) 999-9999" />
        </p>
        <p>
          <label htmlFor="input__search">Search</label>
          <input id="input__search" type="search" placeholder="Enter Search Term" />
        </p>
        <p>
          <label htmlFor="input__text2">Number Input</label>
          <input id="input__text2" type="number" placeholder="Enter a Number" />
        </p>
        <p>
          <label htmlFor="input__text3" className="error">Error</label>
          <input id="input__text3" className="is-error" type="text" placeholder="Text Input" />
        </p>
        <p>
          <label htmlFor="input__text4" className="valid">Valid</label>
          <input id="input__text4" className="is-valid" type="text" placeholder="Text Input" />
        </p>
      </fieldset>
      <fieldset id="forms__checkbox">
        <legend>Checkboxes</legend>
        <label htmlFor="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox" checked="checked" /> Choice A</label><br />
        <label htmlFor="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox" /> Choice B</label><br />
        <label htmlFor="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox" /> Choice C</label>
      </fieldset>
      <fieldset id="forms__radio">
        <legend>Radio buttons</legend>
        <label htmlFor="radio1"><input id="radio1" name="radio" type="radio" className="radio" checked="checked" /> Option 1</label><br />
        <label htmlFor="radio2"><input id="radio2" name="radio" type="radio" className="radio" /> Option 2</label><br />
        <label htmlFor="radio3"><input id="radio3" name="radio" type="radio" className="radio" /> Option 3</label>
      </fieldset>
      <fieldset id="forms__textareas">
        <legend>Textareas</legend>
        <p>
          <label htmlFor="textarea">Textarea</label><br />
          <textarea id="textarea" rows="8" cols="48" placeholder="Enter your message here" />
        </p>
      </fieldset>
      <fieldset id="forms__select">
        <legend>Select menus</legend>
        <p>
          <label htmlFor="select">Select</label><br />
          <select id="select">
            <optgroup label="Option Group">
              <option>Option One</option>
              <option>Option Two</option>
              <option>Option Three</option>
            </optgroup>
          </select>
        </p>
      </fieldset>
      <fieldset id="forms__action">
        <legend>Action buttons</legend>
        <p>
          <input type="submit" value="Default button" />
          <input type="submit" value="Primary button" />
          <input type="submit" value="Disabled button" disabled />
        </p>
      </fieldset>
    </Container>
  </Layout>
)

export default DemoPage
