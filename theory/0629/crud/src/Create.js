export function Create(props) {
  function submitHandler(evt) {
    evt.preventDefault();
    const title = evt.target.title.value;
    const body = evt.target.body.value;
    props.onCreate(title, body);
  }

  return <article>
    <h1>Create</h1>
    <form onSubmit={submitHandler}>
      <p><input type="text" name="title" placeholder="title"></input></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="create"></input></p>
    </form>
  </article>;
}
