import React from 'react';
import sesh from '../img/Sesh.gif';
import filmSage from '../img/filmsagecover.PNG';
import codeQuiz from "../img/2.PNG" ;
import pwGen from "../img/pwgenprompt.PNG";
import githubLogo from '../img/GitHub-Mark-64px.png';
import '../../styles/About.css'


export default function About() {
  return (
    <div id="portfolio">
      <h1  class="componentTitle">Portfolio</h1>
      <section class="workbody">
                <section class="project">
                    <h3>Sesh</h3>
                    <a href="https://guarded-harbor-06421.herokuapp.com/" target="_blank"> 
                        <img src={sesh} alt="Sesh" class="projectImage" />
                    </a>
                    <a href="https://github.com/Surbhiarora3/Sesh" target="_blank" >
                        <img class="gitHub" src={githubLogo} />
                    </a>
                    <p>A music app that lets you customize your own playlist.</p>
                </section>
                <section class="project">
                    <h3>Film Sage</h3>
                    <a href={"https://remotemana.github.io/movie-mood/"} target="_blank"> 
                        <img src={filmSage} alt="Film Sage Title" class="projectImage" />
                    </a>
                    <a href="https://github.com/remotemana/movie-mood" target="_blank">
                        <img class="gitHub" src={githubLogo} />
                    </a>
                    <p>A movie app that reccommends you movies based on your mood.</p>
                </section>

                <section class="project">
                    <h3>Quiz Game</h3>
                    <a href="https://kimoisquiggles.github.io/04-CodeQuiz/" target="_blank">
                        <img src={codeQuiz} alt="Coding Quiz" class="projectImage" />
                    </a>
                    <a href="https://github.com/KIMOISQUIGGLES/04-CodeQuiz" target="_blank">
                        <img class="gitHub" src={githubLogo} />
                    </a>
                    <p>A quiz game involving Magic the Gathering Trivia</p>
                </section>

                <section class="project">
                    <h3>Password Generator</h3>
                    <a href="https://kimoisquiggles.github.io/03-Password-Generator/" target="_blank">
                        <img src={pwGen} alt="Password Generator" class="projectImage" /> 
                    </a>
                    <a href="https://github.com/KIMOISQUIGGLES/03-Password-Generator" target="_blank">
                        <img class="gitHub" src={githubLogo} />
                    </a>
                    <p>Generate a randomized password</p>
                </section>
            </section>
    </div>
  );
}
