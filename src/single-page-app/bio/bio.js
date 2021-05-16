import { React, Component } from "react";

const mybio = 'Computing enthusiast with a passion for learning new technologies, solving challenges with creative solutions, and aspiring cyber security specialist.';

const title = 'Alex Holmes';
const subtitle = 'Software Engineer & technology enthusiast';
const profile_pic = 'https://media-exp1.licdn.com/dms/image/C4D03AQG6gMpnF654Og/profile-displayphoto-shrink_200_200/0/1611170985373?e=1626912000&v=beta&t=Kg3ecgbQDRq6FBF2WUgCLEne7JCrN5BvgfrB_ar74to';
const para1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
// const title = '';
// const title = '';
// const title = '';

class Bio extends Component {

    render() {
        return (
            <section>
                <section class="hero is-link">
                    <div class="hero-body">
                        <h1 class="title">{title}</h1>
                        <h2 class="subtitle">{subtitle}</h2>
                    </div>
                </section>

                <div className='columns'>
                    <div className='column is-one-quarter'>
                        <figure class="image is-128x128">
                            <img class="is-rounded" src={profile_pic} alt='Profile Pic'/>
                        </figure>
                    </div>
                    <div className='column content is-medium'>
                        <p>{para1}</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Bio;