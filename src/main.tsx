
import { FC } from 'react'
import ReactDOM from 'react-dom/client'

//har function return jsx behshe migan components
//components hatman ba harfe bozorge minvisime = paskale case hast
//component ha hatman bayde kochec bashan namishe 60 khate code dakhalesh zade
//React  mige props hamishe object nabyade string ya chize dige bashe
//harchie bayne tag masalen card navshte mishe ba {props.children} dar dastrase
type CardProps = {
  title: string,
  description?: string,
  buttonStyles?: any,
  children?: string,
}


const Card: FC<CardProps> = (props) => {
  return (
  <div>
     <h1>{props?.title}</h1>
     <p>{props.children ?? props.description}</p>
     <button style={props.buttonStyles ?? {}}>action</button>
  </div>
  )
}

//  <Card /> = {Card()}


const App = () => {
  return (
   <div style={{display: "flex",justifyContent: "center" ,gap: "2rem"}}>
     <Card buttonStyles={{ color: "tomato" }} title="Homework" description="doing homeworks" />
     <Card buttonStyles={{ color: "green"}} title="Homework">
      <h1> doing homeworks!</h1>
      <mark> i do!</mark>
    </Card> 
   </div>
  )
 }

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(App());

//tag self close masalan <hr/> inshaklie bashe <hr> </hr>
//code js bayade exopertion bashad nmitavand if function dadime dakhlesh bayade call konime
// exopertion ma mkithonime jloe ye mothghire ghrare bediem mesle const a = ali ya ya mitonr az fuction return beshe 
//components darone hamedige estafde mishane 
//code js byne code jsx benvisime bayed az {} estafde koniem
//dakhale react hatman bayad begime className na class khalie 
//dare react style in html nmidiam 
//agre dakhle react code js ghrare bezanime bayde dakhale {} bashe 
//component be hare function ke jsx return konade migane components
//jsx
//components
//Props
//statez
//ToDo