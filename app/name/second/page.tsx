import { NameGame } from "@/app/components/name-game/name-game"


export default function GuessName() {
    return <div>
        <div style={{fontSize: '24px', fontWeight: 500, width: '100%', textAlign: 'center', margin: '0 0 20px 0'}}>{'Millinafn'}</div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <NameGame answer={'NATAN'} />
        </div>
    </div>
}
