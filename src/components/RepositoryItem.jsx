export function RepositoryItem(props){
    return(
        <li>
        <strong>{props.repository.name}</strong>
        <p>{props.repository.forks_url}</p>
        <a href={props.repository.html_url}>
         Acessar Url
            </a>
            </li>
    );
}