import Button from "./Button";

function StartText() {
  return (
    <div className="start-text center">
      <div className="start-text-left">
        <h1>Latest Posts</h1>
        <p>Check out our most recent articles</p>
      </div>
      <Button variant="secondary" text="View all" />
    </div>
  );
}

export default StartText;
