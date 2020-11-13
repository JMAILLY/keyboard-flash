import React, {useEffect, useState} from "react";
import useKeyPress from "../utils/keypress";
import {generateSentence} from "../utils/words";
import {currentTime} from '../utils/time';
import Speech from "react-speech";


function Test2() {

    const [initialSentence, setInitialSentence] = useState(generateSentence());

    const [outgoingChars, setOutgoingChars] = useState('');
    const [currentChar, setCurrentChar] = useState(initialSentence.charAt(0));
    const [incomingChars, setIncomingChars] = useState(initialSentence.substr(1));

    const [accuracy, setAccuracy] = useState(0);
    const [typedChars, setTypedChars] = useState('');

    const [startTime, setStartTime] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [wpm, setWpm] = useState(0);

    const [seconds, setSeconds] = useState(60);
    const [isActive, setIsActive] = useState(false);

    const [scoreFinal, setScoreFinal] = useState(0);

    function toggle() {
        if (!isActive) {
            document.getElementsByClassName('rs-play')[0].click();
        }
        setIsActive(!isActive);
        if (scoreFinal > 0) {
            setScoreFinal(0)
        }
    }

    function reset() {
        setSeconds(60);
        setIsActive(false);
        setInitialSentence(generateSentence())
        setOutgoingChars('')
        setCurrentChar(initialSentence.charAt(0))
        setIncomingChars(initialSentence.substr(1))
        setAccuracy(0)
        setTypedChars('')
        setStartTime(0)
        setWordCount(0)
        setWpm(0)
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);

        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        if (seconds === 0) {
            setScoreFinal(wpm * (accuracy / 100));
            reset()
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    useKeyPress(key => {

        if (!startTime) {
            setStartTime(currentTime());
        }

        let updatedOutgoingChars = outgoingChars;
        let updatedIncomingChars = incomingChars;

        if (key === currentChar) {

            if (!isActive) {
                toggle()
            }
            if (scoreFinal > 0) {
                setScoreFinal(0)
            }

            updatedOutgoingChars += currentChar;
            setOutgoingChars(updatedOutgoingChars);

            setCurrentChar(incomingChars.charAt(0));
            updatedIncomingChars = incomingChars.substring(1);

            if (incomingChars.length < 1) {
                setInitialSentence(generateSentence());
                setCurrentChar(initialSentence.charAt(0))
                setIncomingChars(initialSentence.substr(1))
                document.getElementsByClassName('rs-play')[0].click();
            }else{
                setIncomingChars(updatedIncomingChars);
            }

            if (incomingChars.charAt(0) === ' ') {
                setWordCount(wordCount + 1);
                const durationInMinutes = (currentTime() - startTime) / 60000.0;
                setWpm(((wordCount + 1) / durationInMinutes).toFixed(2));
            }
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
            <div className="">
                <Speech
                    text={`${currentChar}${incomingChars}`}
                    />
                <p className={"text neon-text phrase current"}>{currentChar}{incomingChars}</p>
                <hr/>
                <p className={"text neon-text flex"}>
                    <span>ACC: <span className={"neon-text-fire"}>{accuracy}%</span></span>
                    <span>WPM: <span className={"neon-text-fire"}>{wpm}</span></span>
                </p>
            </div>
            <span className={"text neon-text phrase"}>
                <span className={"neon-text-fire"}>{seconds}</span>s
            </span>
            <div className="row">
                <button className={`text neon-text`}
                        onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className={"text neon-text"} onClick={reset}>
                    Reset
                </button>
            </div>
            {scoreFinal > 0 &&
            <div className={"final-score text neon-text"}>
                Votre <i className={"neon-text-fire"}>flash</i> score est de: <span
                className={"neon-text-fire"}>{scoreFinal.toFixed(6).slice(0, -4)} </span> !
            </div>
            }
        </div>
    );
}

export default Test2;