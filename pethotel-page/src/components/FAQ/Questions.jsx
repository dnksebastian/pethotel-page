import './Questions.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


const faqItems = [
    {
        question: 'What are your check-in and check-out times?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nemo provident, et doloremque maiores ducimus.'
    },
    {
        question: "Can I bring my pet's favorite toys or bedding?",
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veniam.'
    },
    {
        question: 'What is included in the pet accommodations?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nihil. Dolorem voluptates molestias eum voluptate laboriosam aspernatur sapiente harum culpa?'
    },
    {
        question: 'Do you accommodate pets with special needs?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fugiat.'
    },
    {
        question: 'How often are pets exercised and supervised?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laudantium quisquam quae ea dicta atque.'
    },
];

const Questions = () => {

    const toggleActive = (el) => {
        const closestFAQ = el.closest('li');

        closestFAQ.classList.toggle('faq-active')
    }

    return (
        <section id='questions'>
            <div className="faq-desc-wrapper">
                <h2 className="faq-heading">Frequently Asked Questions</h2>
                <p className="faq-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit ipsa culpa accusamus cum dolore quasi blanditiis ad, sequi assumenda.</p>
            </div>

            <ul className="faq-list">

                {
                faqItems.map((item, i) =>
                <li className="faq-element" key={i}>
                    <div className="question-helper" onClick={({ target }) => toggleActive(target)}>
                    <p className="faq-question">{item.question}</p>
                    <div className="faq-marker-wrap">
                    <FontAwesomeIcon icon={faChevronUp} fixedWidth size='2x'/>
                    </div>
                    </div>
                    <p className="faq-answer">{item.answer}</p>
                </li>
                )}
            </ul>

            <button id='faq-btn'>More Info</button>
        </section>
    )
};

export default Questions