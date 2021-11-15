import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

interface Repository{
    name:string;
    forks_url:string;
    html_url:string;
}

export function RepositoryList(){
const [repositories, setRepositories] = useState<Repository[]>([]);



useEffect(() => {
    fetch('https://api.github.com/users/maikonalexandre/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
}, []);

//se o array estiver vazio só vai executar uma só vez. Não esqueça de colocar o segundo parametro.

    return(
<section className="repository-list">
    <h1>Lista de repositórios</h1>

    <ul>
    {
        repositories.map(repository =>{
            return <RepositoryItem key={repository.name} repository = {repository}/>
        } )
    }
    </ul>
</section>
    );
}