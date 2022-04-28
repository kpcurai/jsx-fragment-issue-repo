const HelloThere = () => (
    <Hello
        role="searchbox"
        frag={
            <>
                <div>Hello</div>
                <div>There</div>
            </>
        }
    />
)

const Hello = (props) => <div>{props.frag}</div>

export default HelloThere;