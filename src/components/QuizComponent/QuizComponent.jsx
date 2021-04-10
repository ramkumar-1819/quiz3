import React from 'react';
import './Quiz.css';
import questions from '../Questions/Question.json';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';

import Result from '../ResultComponent/ResultComponent'

var initial_value=0;
var result={};


class Quiz extends React.Component{
    constructor(){
        super();
        this.state={details:questions[initial_value],isrender:""}
    }
    handle=()=>{
        initial_value=0;
        result={}
    }
        next=()=>{
        initial_value+=1
        this.setState({details:questions[initial_value]})
    }
    previous=()=>{
        if(initial_value===0){
           alert("This is the First Question")
        }
        else if (initial_value>=1){
        initial_value-=1
        this.setState({details:questions[initial_value]})
        }
    }
    quit=()=>{
        this.setState({isrender:"quit"})
    }
    answer=(e)=>{
        var answer=[]
        if(e.target.outerText===this.state.details.answer){
            answer.push(1)
            document.getElementById(e.target.id).style.backgroundColor="green";
        }
        else if(e.target.outerText!==this.state.details.answer){
            answer.push(0)
            document.getElementById(e.target.id).style.backgroundColor="red";
        } 
        answer.push(e.target.id)
        result[initial_value+1]=answer;   
        setTimeout(()=>{
        initial_value+=1;
        if(initial_value===15){
            alert("Quiz is Finished")
        }
        this.setState({details:questions[initial_value]})
        },500)
    }
    render(){
        console.log(result)
        if(initial_value>0 && initial_value<14){
            document.getElementById("optionA").style.backgroundColor="blueviolet";
            document.getElementById("optionB").style.backgroundColor="blueviolet";
            document.getElementById("optionC").style.backgroundColor="blueviolet";
            document.getElementById("optionD").style.backgroundColor="blueviolet";
        }
    return(<>
           <Router>
           {(initial_value<14 && this.state.isrender!=="quit") && 
           <div id="container" className="contain">

           <div className="question-section">
                <div>Question</div>
                <pre><span>  {initial_value+1} of 15</span><span className="question">{this.state.details.question}</span></pre>
            </div>

            <div className="answer-section">
                <button id="optionA" onClick={this.answer}>{this.state.details.optionA}</button>
                <button id="optionB" onClick={this.answer}>{this.state.details.optionB}</button>
                <button id="optionC" onClick={this.answer}>{this.state.details.optionC}</button>
                <button id="optionD" onClick={this.answer}>{this.state.details.optionD}</button>
            </div>

            <div className="buttons-section">
                <button onClick={this.previous} id="prev">Previous</button>
                <button onClick={this.next} id="next">Next</button>
                <button onClick={this.quit}><Link to="/result">Quit</Link></button>
            </div>
         </div>
        }
        {(initial_value===14)&&
        <div id="container" className="contain">

        <div className="question-section">
             <div>Question</div>
             <pre><span>  {initial_value+1} of 15</span><span className="question">{this.state.details.question}</span></pre>
         </div>

         <div className="answer-section">
             <div><Link to ="/result"><button id="optionA" onClick={this.answer}>{this.state.details.optionA}</button></Link></div>
             <div><Link to="/result"><button id="optionB" onClick={this.answer}>{this.state.details.optionB}</button></Link></div>
             <div><Link to="/result"><button id="optionC" onClick={this.answer}>{this.state.details.optionC}</button></Link></div>
             <div><Link to="/result"><button id="optionD" onClick={this.answer}>{this.state.details.optionD}</button></Link></div>
         </div>

         <div className="buttons-section">
             <button onClick={this.previous} id="prev">Previous</button>
             <button onClick={this.next} id="next">Next</button>
             <button onClick={this.quit}>Quit</button>
         </div>
        </div>
        }
        {(initial_value===15 || this.state.isrender==="quit")&&
        <Switch>
        <Route path="/result">
                <Result marks={result}/>
            </Route>
        </Switch>
        }
        </Router>
        </>)
    }
}
export default Quiz