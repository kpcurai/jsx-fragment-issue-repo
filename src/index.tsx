const HelloThere = () => (
  <Hello
    role="checkbox"
    frag={
      <>
        <div>Hello</div>
        <>
          <div>There</div>
        </>
      </>
    }
  />
);

const Hello = () => null;

export default HelloThere;
