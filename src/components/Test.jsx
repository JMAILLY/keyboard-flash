import React, {useState} from "react";
import useKeyPress from "../utils/keypress";
import {generateLetter} from "../utils/words";
import Speech from "react-speech";

const initialSentence = generateLetter();

function Test() {

    const [outgoingChars, setOutgoingChars] = useState('');
    const [currentChar, setCurrentChar] = useState(initialSentence.charAt(0));
    const [incomingChars, setIncomingChars] = useState(generateLetter());

    const [accuracy, setAccuracy] = useState(0);
    const [typedChars, setTypedChars] = useState('');

    useKeyPress(key => {
        let updatedIncomingChars = incomingChars;
        let updatedOutgoingChars = outgoingChars;

        if (key === currentChar) {
            updatedOutgoingChars += currentChar;
            setOutgoingChars(updatedOutgoingChars);

            updatedIncomingChars = generateLetter();
            setIncomingChars(updatedIncomingChars);

            setCurrentChar(incomingChars);
            document.getElementsByClassName('rs-play')[0].click();
        }

        const updatedTypedChars = typedChars + key;
        setTypedChars(updatedTypedChars);

        setAccuracy(
            ((updatedOutgoingChars.length * 100) / updatedTypedChars.length).toFixed(
                2,
            ),
        );
    });
    return (
        <div className={"block-test"}>
            <div className="Character">
                <Speech
                    text={`${currentChar}`}
                />
                <h1 className={"Character-current text neon-text"}>{currentChar}</h1>
                <p className={"text neon-text"}>
                    ACC: <span className={"neon-text-fire"}>{accuracy}%</span>
                </p>
            </div>
        </div>
    );
}

export default Test;