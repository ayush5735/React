function Header({ names }) {

  return (
    <div>
      <h1>Student List</h1>

      <ul>
        {names.map((student, index) => (
          <li key={index}>
            {student}
          </li>
        ))}
      </ul>

      <hr />
    </div>
  );

}

export default Header;