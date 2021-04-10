import React from 'react';
import './Result.css';

class Result extends React.Component{
      render(){
          var correct=0;
          var wrong=0;
          console.log(this.props.marks)
          for (var i in this.props.marks){
              if((this.props.marks[i])[0]===1){
                  correct+=1
              }
              else{
                  wrong+=1
              }
          }
          
          var quote=""
          var percent=parseInt((correct/15*100));
          if(percent>90){
              quote="Excellent"
          }
          else if(percent>75){
                quote="Good"
          }
          else if(percent>50){
              quote="Average"
          }
          else{
              quote="Need to Practice more"
          }
          return(<div className="result">
              <div className="res">
              <img src="https://cdn-0.emojis.wiki/emoji-pics/microsoft/check-mark-microsoft.png" alt="tick pic"></img>
              <div>Result</div>
              </div>
              <div className="box">
                  <div>{quote}</div>
                  <div>{percent}%</div>
                  <pre><span>Total Number of Questions</span><span>15</span></pre>
                  <pre><span>Total Number of Attempted Questions</span><span>{Object.keys(this.props.marks).length}</span></pre>
                  <pre><span>Total Number of Correct Answers</span><span>{correct}</span></pre>
                  <pre><span>Total Number of Wrong Answers</span><span>{wrong}</span></pre>
              </div>
              
              <button className="stop">BackToHome</button>
              <button className="play">PlayAgain</button>
          </div>)
      }
}
export default Result;