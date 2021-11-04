import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Sign In</h1>
        <form action="/action_page.php">
          <label for="fname">Username:</label>
          <input type="text" id="fname" name="fname"/><br/>
          <label for="lname">Password:</label>
          <input type="text" id="lname" name="lname"/><br/>
          <input type="submit" value="Submit"/>
      </form> 
        
    
    </div>
  );
}

export default App;
