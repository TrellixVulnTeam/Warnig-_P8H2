import './styles/global.scss'
import './styles/repositorys.scss'


import { RepositoryList } from './components/RepostoryList'
import { Counter } from './components/Counter'

export function App(){
  
    return (
    <>
      <RepositoryList/>
      <hr/>
      <br/>
      <Counter/>
</> 
    )
}