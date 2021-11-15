interface RepositoryItemProps {
    repository: {
        name: string;
        forks_url:string;
        html_url:string;
    }
}

export function RepositoryItem(props: RepositoryItemProps){
    
    return(
        <li>
        <strong>{props.repository.name}</strong>

        <p>{props.repository.forks_url}</p>

        <a target="_blank" href={props.repository.html_url}>
         Acessar Url
            </a>
            </li>
    );
}