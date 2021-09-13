function GenericCard(props) {
    return(
        <div className="text-left">
            <h3>{props.title}</h3>
            <p>{props.mainMessage}</p>
        </div>
    );
}

export default GenericCard