import React from 'react';

import html from "../img/skills icon/html5.png";
import cLang from "../img/skills icon/c.png";
import java from "../img/skills icon/java.png";
import css from "../img/skills icon/css-3.png";
import javascript from "../img/skills icon/javascript.png";
import nodejs from "../img/skills icon/node.jpg";
import express from "../img/skills icon/express.png";
import jquery from "../img/skills icon/jQuery.png";
import python from "../img/skills icon/python.jpg";
import mongo from "../img/skills icon/mongo.jpg";
import bootstrap from "../img/skills icon/bootstrap.jpg";

import vscode from "../img/skills icon/visual.png";
import bracket from "../img/skills icon/bracket.jpg";
import sublime from "../img/skills icon/sublime.png";
import codepen from "../img/skills icon/codepen.png";
import atom from "../img/skills icon/atom.jpg";
import anaconda from "../img/skills icon/anaconda.png";
import spyder from "../img/skills icon/spyder.png";
import netbeans from "../img/skills icon/netbeans.png";
import codeblock from "../img/skills icon/codeblock.jpg";


const posts = [
    {id:1, title:'HTML', source:html, href:'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', alt:'HTML5'},
    {id:2, title:'C', source:cLang, href:'https://www.learn-c.org/', alt:'C Language'},
    {id:3, title:'Java', source:java, href:'https://www.w3schools.com/java/', alt:''},
    {id:4, title:'MongoDB', source:mongo, href:'https://www.mongodb.com/', alt:''},
    {id:5, title:'Python', source:python, href:'https://www.python.org/', alt:''},
    {id:6, title:'Expressjs', source:express, href:'https://expressjs.com/', alt:''},
    {id:7, title:'Nodejs', source:nodejs, href:'https://nodejs.org/en/', alt:''},
    {id:8, title:'jQuery', source:jquery, href:'https://jquery.com/', alt:''},
    {id:9, title:'Bootstrap', source:bootstrap, href:'https://getbootstrap.com/', alt:''},
    {id:10, title:'CSS3', source:css, href:'https://developer.mozilla.org/en-US/docs/Web/CSS', alt:''},
    {id:11, title:'Javascript', source:javascript, href:'https://developer.mozilla.org/en-US/docs/Web/JavaScript', alt:''}
]

function SkillsThumbnail(props){ 
    const content = props.posts.map((post) =>
        <div className="skills_thumbnail" key={post.id}>
            <img src={post.source} alt={post.alt} className="skills_logo" />
            <h3 className="skills_title">{post.title}</h3>
            <a href={post.href} className="learnMore"  title="Click here to learn" rel="noreferrer" target="_blank">Learn More &rarr;</a>
        </div>
    )
    return(
        <div className="skills_coding">
            {content}
        </div>
    )
 }

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 const ToolsPosts = [
    {id:1, title:'VS Code', source:vscode, href:'https://code.visualstudio.com/', alt:'HTML5'},
    {id:2, title:'Bracket', source:bracket, href:'https://github.com/adobe/brackets/releases/download/release-1.14.2/Brackets.Release.1.14.2.msi', alt:'C Language'},
    {id:3, title:'Sublime Text 3', source:sublime, href:'https://download.sublimetext.com/Sublime%20Text%20Build%203211%20x64%20Setup.exe', alt:''},
    {id:4, title:'Codepen', source:codepen, href:'https://codepen.io/pen/', alt:''},
    {id:5, title:'Atom', source:atom, href:'https://atom.io/download/windows_x64', alt:''},
    {id:6, title:'Anaconda', source:anaconda, href:'https://www.anaconda.com/products/individual#Downloads', alt:''},
    {id:7, title:'Codeblocks', source:codeblock, href:'http://www.codeblocks.org/downloads/binaries', alt:''},
    {id:8, title:'Spyder', source:spyder, href:'https://www.spyder-ide.org/#', alt:''},
    {id:9, title:'Netbeans', source:netbeans, href:'https://netbeans.apache.org/download/nb120/nb120.html', alt:''}
]

function ToolsThumbnail(props){ 
    const content = props.ToolsPosts.map((post) =>
        <div className="skills_thumbnail" key={post.id}>
            <img src={post.source} alt={post.alt} className="skills_logo" />
            <h3 className="skills_title">{post.title}</h3>
            <a href={post.href} className="learnMore"  title="Click here to learn" rel="noreferrer" target="_blank">Download &darr;</a>
        </div>
    )
    return(
        <div className="skills_coding">
            {content}
        </div>
    )
 }

function Skills() {
    return(
        <>  
            <section className="section-skills" id="skills">
                <div className="skills">
                    <div className="about_skills-title myinfo">
                        <h6 className="heading-secondary">Here are some my skills</h6>
                        <h1 className="heading-primary">My Skills</h1>
                    </div>

                    <SkillsThumbnail  posts={posts}/>
                    
                    <h1 className="heading-1">Development Tools &rarr;</h1>

                    <ToolsThumbnail  ToolsPosts={ToolsPosts}/>

                </div>
            </section>
        </>
    );
}
export default Skills;