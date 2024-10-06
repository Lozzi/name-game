import { NameGame } from "@/app/components/name-game/name-game"



export default function GuessName({params}: {params: { name: string }}) {
    const { name } = params
    return <div>
        <div style={{fontSize: '24px', fontWeight: 500, width: '100%', textAlign: 'center', margin: '0 0 20px 0'}}>{name === 'first' ? 'Eiginnafn': 'Millinafn'}</div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <NameGame answer={name === 'first' ? 'BJÖRN' : 'NATAN'} />
        </div>
    </div>
}
