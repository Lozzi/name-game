'use client'
import { useEffect, useState } from 'react';
import RICIBs from 'react-individual-character-input-boxes';
import allowedNames from './allowed-names.json'
import { toast } from 'react-toastify';


export const NameGame = ({answer}: {answer: string})=> { 
    const [guesses, setGuesses] = useState([])
    const [name, setName] = useState('')
    

    const handleOutput = (guess: string) => {
        setName(guess)
    }

    useEffect(()=> {
        const handleUserKeyPress = (event)=> {
            let name = ''
            document.querySelectorAll('input.current-guess').forEach(d => name += d.value)
            if (event.keyCode === 13 && name.length === 5) {
                if (allowedNames.includes(name.toUpperCase())) {
                    setGuesses((guesses)=> guesses.concat(name.toUpperCase()))
                    setName('')
                    document.querySelectorAll('input.current-guess').forEach(d => d.value = '')
                    document.querySelectorAll('input.current-guess')[0].focus()
                } else {
                    toast(<div><b>{name}</b><span>{" er ekki 5 stafa nafn samkvæmt þessum "}</span><a style={{color: 'blue', textDecoration: 'underline'}} href="https://is.wikipedia.org/wiki/Listi_yfir_%C3%ADslensk_eiginn%C3%B6fn_karlmanna">{"lista"}</a></div>)
                }
            }
        }

        document.addEventListener('keydown', handleUserKeyPress)
        return ()=> {
            document.removeEventListener('keydown', handleUserKeyPress)
        }
    }, [])

    return <div>
        {guesses.map((guess: string) => {
            const word = answer.split('')
            return <div>{
                guess.split('').map((character, index) => {
                    let correct = false
                    if (word[index] === character) {
                        correct = true
                        word[index] = ''
                    }
                    return {
                        character,
                        correct
                    }
                }).map(({character, correct}) => {
                let isInWord = false
                if (!correct) {
                    const indexInWord = word.indexOf(character)
                    if (indexInWord > -1) {
                        word[indexInWord] = ''
                        isInWord = true
                    }
                }
                return <input value={character} style={{
                    justifyContent: 'space-between',
                    width: '45px',
                    height: '45px',
                    margin: '5px',
                    backgroundColor: correct ? 'green' : isInWord ? 'yellow' : 'unset',
                    borderRadius: '5px',
                    textAlign: 'center',
                    fontSize: '34px',
                    fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial sans-serif",
                }}></input>
            })
            }</div>
            
        })}
        <RICIBs
        amount={5}
        autoFocus
        handleOutputString={handleOutput}
        inputProps={
        { className: "2fa-box current-guess",
            style: { "color": "black" },
            placeholder: "_",
            onChange: (event)=> {
                console.log(event)
            }
        }
        }
        inputRegExp={/./}
    />
    <button style={{width: '100%', padding: '10px 20px', backgroundColor: name.length !== 5 ? '#ccc' : '#B2FBA5', borderRadius: '10px', fontSize: '24px', fontWeight: '500', fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial sans-serif",}} disabled={name.length !== 5} onClick={()=> {
        if (allowedNames.includes(name.toUpperCase())) {
            setGuesses(guesses.concat(name.toUpperCase()))
            setName('')
            document.querySelectorAll('input.current-guess').forEach(d => d.value = '')
            document.querySelectorAll('input.current-guess')[0].focus()
        } else {
            toast(<div><b>{name}</b><span>{" er ekki 5 stafa nafn samkvæmt þessum "}</span><a style={{color: 'blue', textDecoration: 'underline'}} href="https://is.wikipedia.org/wiki/Listi_yfir_%C3%ADslensk_eiginn%C3%B6fn_karlmanna">{"lista"}</a></div>)
        }
    }}>Giska</button>
  </div>
}
