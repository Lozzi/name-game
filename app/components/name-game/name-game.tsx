'use client'
import { useEffect, useState } from 'react';
import RICIBs from 'react-individual-character-input-boxes';
import allowedNames from './allowed-names.json'
import { toast } from 'react-toastify';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';



export const NameGame = ({answer}: {answer: string})=> { 
    const [guesses, setGuesses] = useState<string[]>([])
    const [name, setName] = useState('')

    const [opened, { open, close }] = useDisclosure(false);

    

    const handleOutput = (guess: string) => {
        setName(guess)
    }

    useEffect(()=> {
        const handleUserKeyPress = (event: {keyCode: number})=> {
            let name = ''
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            document.querySelectorAll('input.current-guess').forEach(d => name += d.value)
            if (event.keyCode === 13 && name.length === 5) {
                if (allowedNames.includes(name.toUpperCase())) {
                    if (name.toUpperCase() === answer) {
                        open()
                    }
                    setGuesses((guesses)=> guesses.concat(name.toUpperCase()))
                    setName('')
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    document.querySelectorAll('input.current-guess').forEach(d => d.value = '')
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
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
    }, [answer, open])

    return <div>
        <Modal opened={opened} onClose={close} title={`ÞAÐ VAR RÉTT!! 🎉🙌🎊`}>
            <p>{answer === 'BJÖRN' ? 'Fornafnið hans er Björn!' : 'Millinafnið hans er Natan'}</p>
            <a href={answer === 'BJÖRN' ? "/name-game/name/second" : "/name-game/name/first"}>{answer === 'BJÖRN' ? 'Giska á millinafn' : 'Giska á fornafni'}</a>
        </Modal>
        {guesses.map((guess: string, i) => {
            const word = answer.split('')
            return <div key={guess + i}>{
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
                }).map(({character, correct}, index) => {
                let isInWord = false
                if (!correct) {
                    const indexInWord = word.indexOf(character)
                    if (indexInWord > -1) {
                        word[indexInWord] = ''
                        isInWord = true
                    }
                }
                return <input key={index} value={character} style={{
                    justifyContent: 'space-between',
                    width: '45px',
                    height: '45px',
                    margin: '5px',
                    backgroundColor: correct ? 'green' : isInWord ? 'yellow' : '#ccc',
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
        { className: "current-guess",
            style: { "color": "black", width: '45px', margin: '5px', height: '45px',  borderRadius: '5px',
                textAlign: 'center',
                fontSize: '34px',
                fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial sans-serif", },
            placeholder: "_",
        }
        }
        inputRegExp={/./}
    />
    <button style={{width: '100%', padding: '10px 20px', backgroundColor: name.length !== 5 ? '#ccc' : '#B2FBA5', borderRadius: '10px', fontSize: '24px', fontWeight: '500', fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial sans-serif",}} disabled={name.length !== 5} onClick={()=> {
        if (allowedNames.includes(name.toUpperCase())) {
            if (name.toUpperCase() === answer) {
                open()
            }
            setGuesses(guesses.concat(name.toUpperCase()))
            setName('')
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            document.querySelectorAll('input.current-guess').forEach(d => d.value = '')
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            document.querySelectorAll('input.current-guess')[0].focus()
        } else {
            toast(<div><b>{name}</b><span>{" er ekki 5 stafa nafn samkvæmt þessum "}</span><a style={{color: 'blue', textDecoration: 'underline'}} href="https://is.wikipedia.org/wiki/Listi_yfir_%C3%ADslensk_eiginn%C3%B6fn_karlmanna">{"lista"}</a></div>)
        }
    }}>Giska</button>
  </div>
}
