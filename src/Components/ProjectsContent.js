import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import Project from './Project';


function ProjectsContent() {
    return (<div className="lg:text-2xl lg:mx-32" data-aos="fade-up">
        <span className="text-orange-400">
            <FontAwesomeIcon
                icon={faProjectDiagram}
                size="4x"
            />
        </span>
        <div className="mb-8">
        <h1 className="font-semibold text-4xl" >Projects</h1>
        <p className="pt-2">
            Here are a couple projects that I have worked on!
                    </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 flex">
           <Project
                title="Ride America"
                tags={['Android','Firebase','GooglePlaces']}
                desc="Developed an android application that allows users to create & talk in various chatrooms. In these chatrooms, the user is also
                able to request a ride from other users. After one of the other users offer and the rider accepts, they are both taken to a screen
                that displays a map and the current location of both users. For the map we used the Google Places API."
                url="xwx2RIgIBh8"
                count="1"/>
          
             <Project
                title="Crypto Currency Exchange" 
                desc="A web application developed by a small team that allows users to buy and sell crypto currencies using play money. User data is
                stored using MongoDB and crypto currency data is updated in real time using CryptoCompare API. The website also features
                voice IO using Amazon AWS."
                tags={['React','Meteor','MongoDB','AWS']}
                url="4gqAjUvLoaU"
                count="2"/>
                 
            <Project
                title="Watch List" 
                desc="The goal of Watch List is to create an application that compiles different movies and TV shows from different providers. 
                The user will be able to enter what providers that have from a list such as Netflix, Hulu, and other video sources. 
                Then when the user enters the app they will be able to view TV shows and movies that those providers have. "
                tags={['Android', 'Firebase', 'TMDb', 'Guidebox']}
                url="SqZCK8lNIcc"
                count="2"/>

            <Project
                title="CSS Hero"
                desc="A website that would teach users basic CSS. The website contains a few lessons and an IDE to allow users
                to test what they are learning. This is achieved through Iframes and javascript. The website is still accessible here"
                tags={['HTML','JQuery']}
                web="https://webpages.uncc.edu/aliu4/CSSHero/"
                count="1"/>

{/*             
            <Project
                title="Chatroom Application"
                tags={['Java','Sockets','Java AWT']}/>
 */}

 {/* <Project
                title="N-Queen Problem" 
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                "
                tags={['Java']}/> */}


        </div>
    </div>)
}

export default ProjectsContent