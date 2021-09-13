function SocialMedia(props) {
    return(
        <div>
            <a href={props.url}><img src={props.iconPath} alt={props.alt}/></a>
        </div>
    );
}

export default SocialMedia;